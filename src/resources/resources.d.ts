import express from 'express';

// The config that will be given to every resource
// This can be any resource-specific configuration
// or DB/External service handlers
export type ResourceConfig = {
    pingReplyText: string;
};

// Defines the function which builds all the routes for a resource
export type RouterBuilderFn = (config: ResourceConfig) => express.Router;

// Defines the set of function handlers which handle the different requests for a resource
export type ControllerHandlers = {
    [fnName: string]: (
        req: express.Request,
        res: express.Response
    ) => Promise<void>;
};

// Defines the function which builds the controller for a resource
export type ControllerBuilderFn = (
    config: ResourceConfig
) => ControllerHandlers;
