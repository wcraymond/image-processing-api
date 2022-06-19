import supertest from 'supertest';
import app from '../../../../src/index';
import clearThumbDirectory from '../../../helpers/clearThumbDirectory';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets main api route response', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('should return status 404 when query is malformed', async () => {
    const response = await request.get('/api/resizedImage');
    expect(response.status).toBe(404);
  });

  it('should return status 200 when query is valid', async () => {
    const response = await request.get('/api/resizedImage?filename=fjord&width=200&height=200');
    expect(response.status).toBe(200);
  })

  afterAll(() => {
    clearThumbDirectory();
  });
});
