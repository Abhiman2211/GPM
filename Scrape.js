var url = 'https://www.dukascopy.com/swiss/english/marketwatch/main/';

var page = require('webpage').create();
page.open(url, function () {
    console.log(page.content);
    phantom.exit();
});