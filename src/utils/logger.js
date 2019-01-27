'use strict';

const { createLogger, format, transports } = require('winston');

const formats = [
    format.splat(),
    format.timestamp({format: process.env.timestampFormat}),
    format.printf(info => `[${info.timestamp}]:[${info.level}] ${info.message}`)
];

// Add color to the log file by setting the "colorize"
// environment variable to 'on'
if (process.env.colorize === 'on') {
    formats.unshift(format.colorize());
}

const logger = createLogger({
    level: process.env.logLevel || 'off',
    format: format.combine(...formats),
    transports: [new transports.Console()]
});

module.exports = logger;

