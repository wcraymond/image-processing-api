import express from 'express';
import path from 'path';
import fs from 'fs';

// Prepare options used in sendFile responses
const options = {
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
};

const serveCachedImageIfExists = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const thumbpath = path.join(
    __dirname,
    '../../../assets/thumb',
    `${filename}_${width}_${height}.jpeg`
  );
  if (fs.existsSync(thumbpath)) {
    console.log(`Serving cached image: ${thumbpath}`);
    res.sendFile(thumbpath, options);
    return;
  }
  next();
};

export default serveCachedImageIfExists;
