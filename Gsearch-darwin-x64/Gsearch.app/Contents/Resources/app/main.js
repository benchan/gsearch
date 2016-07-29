// electronモジュールを読み込み
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// 新しいウィンドウ(Webページ)を生成
let mainWindow
function createWindow () {
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

//var request = require('request');
//var targetUrl = "http://blog.honjala.net/about";
//request(targetUrl, function (err, res, body) {
    //if (err) {
        //console.log(err);
    //}
    //$("#data").html(body);
//});

//var client = require('cheerio-httpcli');
//var word = 'node.js';

//client.fetch('http://www.google.com/search', { q: word }, function (err, $, res, body) {
    //// レスポンスヘッダを参照
    //console.log(res.headers);

    //// HTMLタイトルを表示
    //console.log($('title').text());

    //// リンク一覧を表示
    //$('a').each(function (idx) {
        //console.log($(this).attr('href'));
    //});
//});
