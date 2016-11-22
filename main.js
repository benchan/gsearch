// electronモジュールを読み込み
const {app, BrowserWindow, Menu} = require('electron');

// 新しいウィンドウ(Webページ)を生成
let mainWindow
function createWindow () {

    addMenu();
    // BrowserWindowインスタンスを生成
    mainWindow = new BrowserWindow({width: 800, height: 600, 'node-integration': false})
    //mainWindow = new BrowserWindow({width: 800, height: 600})
    // index.htmlを表示
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    // デバッグするためのDevToolsを表示
    //mainWindow.webContents.openDevTools()
    // ウィンドウを閉じたら参照を破棄
    mainWindow.on('closed', function () {
        mainWindow = null
    })


}

// アプリの準備が整ったらウィンドウを表示
app.on('ready', createWindow)

// 全てのウィンドウを閉じたらアプリを終了
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

function addMenu(){
    var template = [{
        label: "Application",
        submenu: [
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
            label: "Edit",
            submenu: [
                { type: "separator" },
                { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
                { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
            ]}
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
