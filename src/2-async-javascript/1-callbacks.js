'use strict';

const request = require('request');

const logger = require('../utils/logger');
const safeParse = require('../utils/safeParse');

const GOOD_URL = 'https://jsonplaceholder.typicode.com/users/1';

/**
 * Call a url and print the response or the error
 * @param {*} url
 */
function printUser(url) {
    logger.verbose(`callbacks.printUser() url: ${url}`);

    request.get(url, function(error, response, body) {
        if (error) {
            logger.error(`callbacks.printUser() url: ${url} error: %j`, error);
            console.log(`StatusCode: ${response && response.statusCode}`);
            console.log(`Error: ${error.message}`);
            return;  // Don't forget this
        }

        logger.verbose(`callbacks.printUser() url: ${url} statusCode: ${response.statusCode} body: %j`, body);
        console.log(response.statusCode);
        console.log(safeParse(body));
    });
}


// 1. success
printUser(GOOD_URL);


// --------------------------------------------------------------- //


// 2. fail
// printUser('qwery.qwerty');
