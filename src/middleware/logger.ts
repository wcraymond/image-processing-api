import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let date = new Date();
  let timestamp =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let message = `[${timestamp}] ${method}: ${url} ${status}`;
  console.log(message);
  next();
};

export default logger;
