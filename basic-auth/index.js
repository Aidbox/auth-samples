var https = require('https');

var options = {
    host: 'YOUR_BOX_NAME',
    path: 'PATH',               //example /Client
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + '[Base64_of_your_id:secret]'
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
