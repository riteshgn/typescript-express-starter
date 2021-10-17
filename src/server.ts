/*************************************************************
 * Server module
 *
 * Starts the app and hosts it on an HTTP server
 *************************************************************/

import express from 'express';

import logger from './utils/logger';

/**
 * Defines the server configuration parameters
 */
export type ServerConfig = {
    port: number;
};

/**
 * start
 * Launches an HTTP server with the app
 *
 * @param app - express.Application
 * @param config - ServerConfig
 * @returns
 *  Promise<boolean>
 */
export async function start(
    app: express.Application,
    config: ServerConfig
): Promise<boolean> {
    return new Promise((resolve) => {
        app.listen(config.port, () => {
            logger.info(`App listening on port: ${config.port}`);
            resolve(true);
        });
    });
}
