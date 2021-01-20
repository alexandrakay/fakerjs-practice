const request = require('request');

request('http://localhost:3004/data?_start=4&_end=8', (err, resp, body) => {

    if (err) {
        console.error('request failed');
        console.error(err);
    } else {
        console.log(body);
    }
});