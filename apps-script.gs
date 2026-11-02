// Google Sheet > Extensions > Apps Script. Paste, then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Paste the /exec URL into TRACK_URL in www/index.html.
function doPost(e){
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    .appendRow([new Date(), d.sid, d.ev, d.lang, d.stars]);
  return ContentService.createTextOutput("ok");
}
// Sheet columns: time | anonymous session id | event (install/open/start/finish) | language | stars
