import express from 'express';

const validateQueryParams = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  // Return 404 if some of (or all) query params are missing
  if (!req.query.filename || !req.query.width || !req.query.height) {
    res.status(404).send('Ensure filename, width, and height are provided.');
    return;
  }
  next();
};

export default validateQueryParams;
