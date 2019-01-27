'use strict';

const request = require('request');
const axios = require('axios');

const logger = require('../utils/logger');

const USER_URL = 'https://jsonplaceholder.typicode.com/users';


/**
 * This function takes a userUrl, id, and callback, and appends the userUrl and id
 * into a url, then calls the url. If successful, the callback is called with the
 * user object as the second parameter. If an error occurs, the callback is called
 * with the error message as the first parameter.
 *
 * @param {*} userUrl
 * @param {*} id
 * @param {*} callback A standard callback function -> function(error, result) {}
 */
function fetchUserWithCallback(userUrl, id, callback) {
    logger.verbose(`exercise-utils.fetchUserWithCallback() id: ${id} userUrl: ${userUrl}`);

    const url = buildUrl(userUrl, id);
    logger.verbose(`exercise-utils.fetchUserWithCallback() id: ${id} url: ${url}`);

    request.get(url, (error, response, body) => {
        if (error) {
            logger.error(`exercise-utils.fetchUserWithCallback() url: ${url} error: %j`, error);
            console.log(`Error: ${error.message}`);
            return callback(error.message);
        }

        logger.verbose(`exercise-utils.fetchUserWithCallback() url: ${url} statusCode: ${response.statusCode} body: %j`, body);
        return callback(null, body);
    });
}


/**
 * This function takes a userUrl, id and appends the userUrl and id into a url, then
 * calls the url and returns a Promise. If successful, the Promise resolves with the
 * user object. If an error occurs, the Promise rejects with error.code as the reject
 * value.
 *
 * @param {*} userUrl
 * @param {*} id
 * @returns a Promise
 */
function fetchUserWithPromise(userUrl, id) {
    logger.verbose(`exercise-utils.fetchUserWithPromise() id: ${id} userUrl: ${userUrl}`);

    const url = buildUrl(userUrl, id);
    logger.verbose(`exercise-utils.fetchUserWithPromise() id: ${id} url: ${url}`);

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                logger.verbose(`exercise-utils.fetchUserWithPromise() url: ${url} status: ${response.status} body: %j`, response.data);
                resolve(response.data);
            })
            .catch(error => {
                logger.error(`exercise-utils.fetchUserWithPromise() url: ${url} error: %j`, error.code);
                reject(error.code);
            });
    });
}


/**
 * This async function takes a userUrl, id and appends the userUrl and id into a url,
 * then calls the url and asynchronously returns the user or throws an Error with
 * the code field of the failed call as the message value of the Error.
 * value.
 *
 * @param {*} userUrl
 * @param {*} id
 * @returns a Promise
 */
async function fetchUserWithAsync(userUrl, id) {
    logger.verbose(`exercise-utils.fetchUserWithAsync() id: ${id} userUrl: ${userUrl}`);

    const url = buildUrl(userUrl, id);
    logger.verbose(`exercise-utils.fetchUserWithAsync() id: ${id} url: ${url}`);

    try {
        const response = await axios.get(url);
        logger.verbose(`exercise-utils.fetchUserWithAsync() url: ${url} status: ${response.status} body: %j`, response.data);
        return response.data;
    } catch(error) {
        logger.error(`exercise-utils.fetchUserWithPromise() url: ${url} error: %j`, error.code);
        throw new Error(error.code);
    }
}


function buildUrl(userUrl, id) {
    return `${userUrl}/${id}`;
}


// (async function go() {
//     try {
//         // const result = await fetchUserWithPromise(USER_URL, 2);
//         const result = await fetchUserWithAsync(USER_URL, 2);
//         console.log(result);
//     } catch(error) {
//         console.log(error);
//     }

//     // fetchUserWithCallback('X' + USER_URL, 2, (error, result) => {
//     //     console.log(error);
//     //     console.log(result);
//     // });
// })();


module.exports.fetchUserWithCallback = fetchUserWithCallback;
module.exports.fetchUserWithPromise = fetchUserWithPromise;
module.exports.fetchUserWithAsync = fetchUserWithAsync;
module.exports.buildUrl = buildUrl;
module.exports.USER_URL = USER_URL;
