/*************************************************************
 * Entrypoint module
 *
 * This will configure the app with required dependencies and launch the app on a server
 *************************************************************/

import dotenv from 'dotenv';

import * as App from './app';
import * as Server from './server';
import { ResourceConfig } from './resources/resources';

// Initialize environment variables from .env file
// See .env-template for list of variables being used throughout the app
dotenv.config();

// IIFE which boostraps the server
(async () => {
    // Resource-specific configuration and DB/external API handlers
    const resourceConfig: ResourceConfig = {
        pingReplyText: 'Hello, I am alive!',
    };

    const app = await App.create(resourceConfig);

    // Server-specific configuration parameters
    const serverConfig: Server.ServerConfig = {
        port: Number(process.env.APP_PORT) || 3000,
    };

    await Server.start(app, serverConfig);
})();
