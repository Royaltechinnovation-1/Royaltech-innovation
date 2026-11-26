/**
 * Receives website leads and appends them to a Google Sheet.
 *
 * SETUP (one time, ~2 minutes)
 * 1. Create a Google Sheet (any name) — e.g. "RoyalTech Leads".
 * 2. In the sheet: Extensions > Apps Script. Delete the sample code and paste this whole file. Save.
 * 3. Click Deploy > New deployment > type "Web app":
 *      - Execute as:      Me
 *      - Who has access:  Anyone
 *    Click Deploy, authorise when asked, and copy the "Web app URL" (it ends in /exec).
 * 4. Put that URL in the site's environment as  LEADS_WEBHOOK_URL=<the /exec URL>
 *    (Hostinger: Node.js app > Environment variables;  local: .env.local) and restart the site.
 *
 * Every lead form on the site (including the /portfolio contact pop-up) posts to /api/leads, which
 * saves the lead in the dashboard and then forwards it here.
 *
 * If you change this code later, use Deploy > Manage deployments > Edit > New version, so the /exec URL
 * stays the same.
 */

var SHEET_NAME = "Leads"; // tab name; created automatically if missing
var HEADERS = ["Received at", "Name", "Email", "Phone", "Project / service", "Message", "Source", "Lead ID"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // avoids two simultaneous leads writing to the same row
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      clean_(data.name),
      clean_(data.email),
      // The leading apostrophe stores it as text, so "+91..." and leading zeros are kept (and it can't be a formula).
      "'" + (data.phone === null || data.phone === undefined ? "" : String(data.phone)),
      clean_(data.service),
      clean_(data.message),
      clean_(data.source),
      clean_(data.leadId),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Opening the /exec URL in a browser should just confirm the script is live. */
function doGet() {
  return json_({ ok: true, message: "Lead endpoint is live. Send leads with POST." });
}

/**
 * Stops values starting with = + - @ from being run as spreadsheet formulas (formula injection),
 * and keeps everything a plain string.
 */
function clean_(v) {
  var s = v === null || v === undefined ? "" : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
