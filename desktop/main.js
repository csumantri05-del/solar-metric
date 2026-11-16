// Solar Metric by BSB Group - aplikasi desktop Windows
const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 860,
    minWidth: 380,
    minHeight: 600,
    title: 'Solar Metric by BSB Group',
    icon: path.join(__dirname, 'app', 'icons', 'icon-512.png'),
    backgroundColor: '#f3f6f9',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, spellcheck: false }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Link ke situs luar dibuka di browser, bukan di dalam aplikasi
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('file:')) {
      e.preventDefault();
      if (/^https?:/i.test(url)) shell.openExternal(url);
    }
  });

  // Ctrl+P = cetak laporan, F5 = muat ulang, Ctrl +/- = zoom
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    const k = input.key.toLowerCase();
    if (input.control && k === 'p') { e.preventDefault(); win.webContents.executeJavaScript('doPrint()'); }
    else if (k === 'f5') { e.preventDefault(); win.webContents.reload(); }
    else if (input.control && (k === '=' || k === '+')) { e.preventDefault(); win.webContents.setZoomLevel(win.webContents.getZoomLevel() + 0.5); }
    else if (input.control && k === '-') { e.preventDefault(); win.webContents.setZoomLevel(win.webContents.getZoomLevel() - 0.5); }
    else if (input.control && k === '0') { e.preventDefault(); win.webContents.setZoomLevel(0); }
  });

  win.on('closed', () => { win = null; });
}

// Hanya satu jendela aplikasi
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
  });
  app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();
  });
  app.on('window-all-closed', () => app.quit());
}
