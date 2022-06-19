import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

// Add main API route
app.use('/api', routes);

// Start Express server on port 3000
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
