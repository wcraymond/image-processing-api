import express from 'express';
import resizedImage from './api/resizedImage';

const routes = express.Router();

// Add route for resizedImage
routes.use('/resizedImage', resizedImage);

// Endpoint for the main API route (not useful but testable)
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main API route');
});

export default routes;
