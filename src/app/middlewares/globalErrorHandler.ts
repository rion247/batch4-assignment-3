import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../config';
import { TErrorSources } from '../interface/errror';
import { Error } from 'mongoose';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!!!';
  let errorSources: TErrorSources = [
    {
      path: '',
      messsage: 'Something went wrong!',
    },
  ];
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
  return;
};

export default globalErrorHandler;
