/*******************************************************
 * Logger module
 *
 * Boilerplate for setting up a logger using winston
 *******************************************************/

import winston, { format, transports } from 'winston';

const options: winston.LoggerOptions = {
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
        format.prettyPrint()
    ),
    transports: [
        new transports.Console({
            level: !!process.env.PROD_MODE ? 'error' : 'debug',
            handleExceptions: true,
        }),
    ],
};

const logger = winston.createLogger(options);

export default logger;
