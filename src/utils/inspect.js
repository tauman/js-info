'use strict';

const { inspect } = require('util');


module.exports = object => inspect(object, { depth: null });