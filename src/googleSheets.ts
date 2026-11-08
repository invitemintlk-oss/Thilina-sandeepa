type SheetName = 'rsvp';

type SheetPayload = Record<string, string | number>;

// Paste the Web App /exec URL from the Apps Script deployment (google-apps-script/code.gs)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2BGj7yPcGEd-xgbuUe_H2b2CVROLrEg5e6SCtu9Yr9l_QXU4QbMe2nckOgT4OsLh6dQ/exec";

export async function submitToGoogleSheet(sheet: SheetName, payload: SheetPayload): Promise<void> {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.startsWith('PASTE_')) {
    throw new Error('Missing GOOGLE_SCRIPT_URL');
  }

  const body = new URLSearchParams();
  body.append('sheet', sheet);
  body.append('payload', JSON.stringify(payload));

  // Google Apps Script web apps often run cross-origin without CORS headers.
  // no-cors still sends the request, but the response is opaque to the browser.
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}
