import express from 'express';

import {
    ControllerHandlers,
    ResourceConfig,
    RouterBuilderFn,
} from '../../resources';
import PingController from './ping.controller';

const PingRoutes: RouterBuilderFn = (config: ResourceConfig) => {
    const pingRouter: express.Router = express.Router();
    const controller: ControllerHandlers = PingController(config);

    pingRouter.get('/', controller.getPingReply);

    return pingRouter;
};

export default PingRoutes;
