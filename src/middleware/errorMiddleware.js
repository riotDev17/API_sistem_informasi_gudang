import { ResponseError } from '../error/responseError.js';

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        status: 'Error',
        message: `HTTP ${err.status} : ${err.message}`,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        status: 'Error',
        message: `HTTP 500 : ${err.message}`,
      })
      .end();
  }
};

export { errorMiddleware };
