import fs from 'fs';
import path from 'path';
import express from 'express';

const validateFileExists = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const filename = req.query.filename as string;

  // Prep full-sized file path using __dirname
  const filepath = path.join(
    __dirname,
    '../../assets/full',
    `${filename}.jpeg`
  );

  if (!fs.existsSync(filepath)) {
    res.status(404).send('File not found: Please use a valid file name');
    return;
  }

  next();
};

export default validateFileExists;
