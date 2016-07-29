var client = require('cheerio-httpcli');
var _ = require('jquery');
var data = '';

_("#search").on('click', function(){
    q = _("#query").val();
    if(q == ''){
        alert("検索ワードを入れて下さい");
        return;
    }
    _("#search").attr('disabled', 'disabled');
    _("#loading").show();

    //getData(q, addText);
    getDataPromise(q, addText);
});

function addText(){
    _('#data').html(data);
    _("#loading").hide();
    _("#search").removeAttr('disabled');
}

function getDataPromise(q, callback){
    word = q;
    var p = client.fetch('http://www.google.com/search', { q: word });
    p.then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .then(function (result) {
        return addData(result);
    })
    .finally(function () {
        console.log('done');
        callback();
    });
}

function addData(result){
    result.$('.srg h3 a').each(function (idx) {
        data +=  result.$(this).attr('href');
        data += "\n";
    });
    next = result.$('a#pnnext').url();
    return client.fetch(next);
}
