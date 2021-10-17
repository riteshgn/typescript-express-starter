import supertest from 'supertest';

import * as App from '../app';

let request: supertest.SuperTest<supertest.Test>;
const REPLY_TEXT = 'Dhun Dhun Dhun';

beforeAll(async () => {
    // Initialize the app and request object
    const app = await App.create({
        pingReplyText: REPLY_TEXT,
    });

    request = supertest(app);
});

describe('routes', () => {
    describe('/api/v1', () => {
        describe('GET /ping', () => {
            it('should return proper ping reply text', async () => {
                const response = await request.get('/api/v1/ping');
                expect(response.status).toBe(200);
                expect(response.text).toBe(REPLY_TEXT);
            });
        });
    });
});
