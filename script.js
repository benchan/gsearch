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

    getDataPromise(q, addText);
});

_("#data, #data_domain").on('focus', function(){
    _(this).select();
});

function addText(){
    _('#data').html(data);
    _("#loading").hide();
    _("#search").removeAttr('disabled');
    domain(data);
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

function domain(data){
    data_arr = data.split('\n');
    arr = [];
    _.each(data_arr, function(){
        if(this != ''){
            arr.push(this.split('/')[2]);
        }
    });

    result_arr = _.unique(arr);
    text = '';
    _.each(result_arr, function(){
        text += this + "\n";
    });
    _("#data_domain").text(text);
}
