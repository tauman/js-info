'use strict';


// Utility to return object or error message
module.exports = function(string) {
    try {
        return JSON.parse(string);
    } catch(error) {
        return error.message;
    }
};
