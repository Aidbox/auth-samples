var https = require('https');

var options = {
    host: 'auth0sync.aidbox.app',
    path: '/Client',
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + 'YmFzaWM3OnNlY3JldDc='
    }
};

let body = '';

var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        body += d;
    });

    res.on('end', function() {
        try {
            const parsedData = JSON.parse(body);
            let temp = JSON.stringify(parsedData, undefined, 4);
            console.log(temp);
        } catch (e) {
            console.error(e.message);
        }
    });
})

req.on('error', error => {
    console.error(error)
});

req.end();
