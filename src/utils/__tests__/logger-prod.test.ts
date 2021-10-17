import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.join(__dirname, '.env.logger.prod'),
});

import logger from '../logger';

describe('logger', () => {
    it('should import proper Logger instance in PROD mode', () => {
        expect(logger).toBeDefined();
        expect(logger.debug).toBeDefined();
        expect(logger.info).toBeDefined();
        expect(logger.warn).toBeDefined();
        expect(logger.error).toBeDefined();
    });
});
