'use strict';

const request = require('request');
const inspect = require('../utils/inspect');
const safeParse = require('../utils/safeParse');

// What happes if this is called?
function fetchUserWithCallback(url, callback) {
    request.get(url, (error, response, body) => {
        if (error) {
            // what happens here???
            callback(error.message);
        }

        return callback(null, safeParse(body));
    });
}


fetchUserWithCallback('https://jsonplaceholder.typicode.com/users/3', (error, result) => {
    console.log('\ncallback()...');
    console.log(`error: ${inspect(error)}`);
    console.log(`result: ${inspect(result)}`);
    console.log();
});


// --------------------------------------------------------------- //


// fetchUserWithCallback('sdf.asdf', (error, result) => {
//     console.log('\ncallback()...');
//     console.log(`error: ${inspect(error)}`);
//     console.log(`result: ${inspect(result)}`);
//     console.log();
// });
