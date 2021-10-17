import logger from '../logger';

describe('logger', () => {
    it('should import proper Logger instance', () => {
        expect(logger).toBeDefined();
        expect(logger.debug).toBeDefined();
        expect(logger.info).toBeDefined();
        expect(logger.warn).toBeDefined();
        expect(logger.error).toBeDefined();
    });
});
