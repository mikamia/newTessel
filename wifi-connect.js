var https = require('https');
var wifi = require('wifi');


module.exports = function () {

wifi.on('connect', function(data) {

    console.log("connect emitted", data);

    var json = JSON.parse('{"text":"This is a line of text in a channel.\nAnd this is another line of text."}');
    var postData = 'payload=' + JSON.stringify(json);

    var options = {
        hostname: 'hooks.slack.com',
        port: 443,
        path: '/services/T1L5CHVR7/B1L55JECQ/wvHphlsxHAQ0X7h2wmXlp36k',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    // Setup the request.  The options parameter is
    // the object we defined above.
    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            console.log(responseString);
        });
    });

    req.on('error', function(e) {
        console.log('something error.');
    });

    req.write(postData);
    req.end();

});

}
