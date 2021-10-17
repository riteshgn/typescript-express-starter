/*************************************************************
 * Router module
 *
 * The main router which bootstraps the express app with all required routes
 *************************************************************/

import express from 'express';

import { ResourceConfig } from './resources/resources';
import V1PingRoutes from './resources/v1/ping/ping.router';

/**
 * registerRoutes
 * Builds the list of routes supported by the app
 *
 * @param app - express.Application
 * @param config - ResourceConfig
 */
export function registerRoutes(
    app: express.Application,
    config: ResourceConfig
) {
    const v1Router: express.Router = express.Router();
    v1Router.use('/ping', V1PingRoutes(config));

    app.use('/api/v1', v1Router);
}
