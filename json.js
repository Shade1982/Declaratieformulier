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
              "isRequired": true,
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
              "isRequired": true,
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
              ],
              "allowClear": false
            },
            {
              "type": "text",
              "name": "Bedrag",
              "startWithNewLine": false,
              "isRequired": true,
              "maskType": "currency",
              "maskSettings": {
                "prefix": "$ "
              }
            },
            {
              "type": "text",
              "name": "Omschrijving",
              "isRequired": true
            }
          ],
          "panelCount": 1,
          "minPanelCount": 1,
          "maxPanelCount": 10
        },
        {
          "type": "expression",
          "name": "Totaal",
          "expression": "{Declaraties[0].Bedrag} + {Declaraties[1].Bedrag} + {Declaraties[2].Bedrag} + {Declaraties[3].Bedrag} + {Declaraties[4].Bedrag} + {Declaraties[5].Bedrag} + {Declaraties[6].Bedrag} + {Declaraties[7].Bedrag} + {Declaraties[8].Bedrag} + {Declaraties[9].Bedrag}",
          "format": {
            "nl": "{0}"
          },
          "displayStyle": "currency",
          "currency": "EUR"
        },
        {
          "type": "file",
          "name": "Factuur of Bonnetje",
          "allowMultiple": true,
          "allowImagesPreview": false,
          "acceptedTypes": ".xlsx, .docx, .pdf, image/*",
          "waitForUpload": true,
          "maxSize": 10485760,
          "maxFiles": 5,
          "sourceType": "file-camera"
        }
      ]
    }
  ],
  "showPrevButton": false,
  "showTitle": false,
  "showPageTitles": false,
  "showCompletePage": false,
  "navigateToUrl": "https://svspirit.nl/",
  "allowResizeComment": false,
  "questionsOnPageMode": "singlePage",
  "headerView": "advanced"
}
