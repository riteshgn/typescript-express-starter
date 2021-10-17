import express from 'express';

import { ControllerBuilderFn, ResourceConfig } from '../../resources';

const PingController: ControllerBuilderFn = (config: ResourceConfig) => {
    return {
        getPingReply: async (_: express.Request, res: express.Response) => {
            res.send(config.pingReplyText);
        },
    };
};

export default PingController;
