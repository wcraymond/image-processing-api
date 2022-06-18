import express from 'express';
import logger from '../middleware/logger';

const routes = express.Router();

routes.use(logger);

routes.get('/', (req, res) => {
  res.send('Main API route');
});

export default routes;
