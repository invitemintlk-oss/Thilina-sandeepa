// Thilina & Sandeepa wedding — RSVP receiver
// Spreadsheet: https://docs.google.com/spreadsheets/d/1EZ_3fuEhwjCSi3BuyL3J22EaiFST0xeybo5yI_Yv1q8/edit
const SPREADSHEET_ID = '1EZ_3fuEhwjCSi3BuyL3J22EaiFST0xeybo5yI_Yv1q8';
const TIMEZONE = 'Asia/Colombo';

const SHEETS = {
  rsvp: {
    name: 'RSVP',
    headers: ['Timestamp', 'Name', 'Attending', 'Guests', 'Message'],
    row: (p) => [p.name, p.status, p.guestCount, p.message],
  },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // avoid two guests writing the same row at once
  try {
    const key = String((e && e.parameter && e.parameter.sheet) || '').toLowerCase();
    const config = SHEETS[key];
    if (!config) {
      return jsonResponse({ ok: false, error: 'Invalid sheet. Use rsvp.' });
    }

    const payload = JSON.parse((e.parameter && e.parameter.payload) || '{}');
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(config.name) || spreadsheet.insertSheet(config.name);

    ensureHeaders(sheet, config.headers);

    const timestamp = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
    sheet.appendRow([timestamp].concat(config.row(payload).map(sanitize)));

    return jsonResponse({ ok: true, sheet: config.name });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error && error.message ? error.message : error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'thilina-sandeepa-rsvp', time: new Date().toISOString() });
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#7f1d1d')
    .setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

// Prefix values starting with = + - @ so guest input can't run as a formula
function sanitize(value) {
  if (value === null || value === undefined) return '';
  const text = String(value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
