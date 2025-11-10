const json = {
  "locale": "nl",
  "title": "Declaratieformulier",
  "description": "Declaratie indienen",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "Naam",
          "isRequired": true,
          "autocomplete": "name",
          "placeholder": "voornaam achternaam"
        },
        {
          "type": "expression",
          "name": "Datum",
          "visible": false,
          "expression": "today()",
          "format": "{0}",
          "displayStyle": "date"
        },
        {
          "type": "comment",
          "name": "Omschrijvingen",
          "isRequired": true
        },
        {
          "type": "paneldynamic",
          "name": "Declaraties",
          "isRequired": true,
          "templateElements": [
            {
              "type": "dropdown",
              "name": "Kostenplaats",
              "choices": [
                "Spirit Algemeen",
                "Actief 55+",
                "Badminton",
                "Fit op Muziek",
                "Gymnastiek",
                "Hardlopen (za/wo-avond)",
                "Hartrevalidatie",
                "HSN Outdoor",
                "Volleybal ZVC"
              ],
              "allowClear": false
            },
            {
              "type": "dropdown",
              "name": "Tegenrekening",
              "startWithNewLine": false,
              "choices": [
                "4000 Zaalhuur",
                "4100 Vergoedingen trainers/begeleiders",
                "4110 Cursuskosten begeleiding",
                "4190 Overige kosten begeleiding",
                "4200 Aanschaf materialen",
                "4400 Kosten vrijwilligers",
                "4500 Competitie- & wedstrijdkosten",
                "4510 Lidmaatschappen & contributies",
                "4600 Sfeeractiviteiten",
                "4720 Promotie activiteiten",
                "4800 Administratiekosten"
              ]
            },
            {
              "type": "text",
              "name": "Bedrag",
              "startWithNewLine": false,
              "maskType": "currency",
              "maskSettings": {
                "prefix": "€"
              }
            },
            {
              "type": "text",
              "name": "Omschrijving"
            }
          ],
          "panelCount": 1,
          "minPanelCount": 1,
          "maxPanelCount": 10
        },
        {
          "type": "file",
          "name": "Factuur of Bonnetje",
          "allowMultiple": true,
          "allowImagesPreview": false,
          "acceptedTypes": ".xlsx, .docx, .pdf, image/*",
          "waitForUpload": true,
          "maxSize": 10.48576,
          "maxFiles": 5
        },
        {
          "type": "html",
          "name": "info",
          "html": "<div id='g-recaptcha'></div> <div class='form-group g-recaptcha' data-callback='verifyCaptcha' data-sitekey='\" + recaptchaClientKey + \"'></div>"
        }
      ]
    }
  ],
  "showTitle": false,
  "headerView": "advanced"
}
