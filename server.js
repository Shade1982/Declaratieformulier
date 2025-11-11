import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- Hard-coded credentials for testing ----
const ACCESSTOKEN = "rnhjlQPSbFbUf-fxRDDJcONSbbXFKEhZ7kSzAPYraWy4sUsNM5";
const SOURCE = "WordPress";
// --------------------------------------------

const PORT = 3000;

// Utility: send JSON with CORS header
function sendJSON(res, data, status = 200) {
  const json = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept"
  });
  res.end(json);
}

// Utility: serve static files (index.html)
function serveFile(res, filename, contentType = "text/html") {
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // Handle CORS preflight
  if (method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept"
    });
    return res.end();
  }

  // API endpoint
  if (url === "/api/session") {
    if (method !== "GET") {
      return sendJSON(res, { error: "Method not allowed" }, 405);
    }

    const payload = JSON.stringify({
      accessToken: ACCESSTOKEN,
      source: SOURCE
    });

    const options = {
      hostname: "api.e-boekhouden.nl",
      path: "/v1/session",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    };

    const apiReq = https.request(options, apiRes => {
      let body = "";
      apiRes.on("data", chunk => body += chunk);
      apiRes.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          sendJSON(res, parsed, apiRes.statusCode);
        } catch {
          sendJSON(res, { error: "Invalid JSON from API", raw: body }, 502);
        }
      });
    });

    apiReq.on("error", err => {
      sendJSON(res, { error: err.message }, 500);
    });

    apiReq.write(payload);
    apiReq.end();
    return;
  }

  // Serve index.html for other paths
  const filePath = path.join(__dirname, "index.html");
  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
