/*************************************************************
 * App module
 *
 * This module creates the express app configuring it with required middleware
 *************************************************************/

import express from 'express';

import * as Router from './router';
import { ResourceConfig } from './resources/resources';

/**
 * create
 * Creates the express app and configures all required middleware
 *
 * @param config - ResourceConfig
 * @returns
 *  Promise<express.Application> - A promise which resolves to the express app
 */
export async function create(
    config: ResourceConfig
): Promise<express.Application> {
    const app = express();

    Router.registerRoutes(app, config);

    return app;
}
