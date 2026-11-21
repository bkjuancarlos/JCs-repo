/*
  JC's Bot: auto-open the Intercom Messenger.
  8 seconds after a visitor lands, opens a new conversation so JC's Bot greets them
  (Fin intro is auto-translated on Spanish pages).
  Once per browser session. Desktop/tablet only (on phones the Messenger opens full screen).
  Loaded on every page that has the Intercom snippet, just before </body>.
*/
(function () {
  var KEY = 'jcbot_autoopen_shown';
  var DELAY_MS = 8000;   // 5000 = 5 seconds
  var MIN_WIDTH = 768;   // 0 = also auto-open on phones

  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  if (window.innerWidth < MIN_WIDTH) return;

  setTimeout(function () {
    if (typeof window.Intercom !== 'function') return;
    window.Intercom('showNewMessage');
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
  }, DELAY_MS);
})();
