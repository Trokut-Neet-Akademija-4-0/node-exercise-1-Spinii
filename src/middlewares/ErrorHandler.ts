import { Request, Response, NextFunction } from 'express'
import HttpError from '../services/productService'

function ErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err instanceof HttpError ? err.statusCode : 500
  const message = err.message || 'internal server error'

  res.status(statusCode).json({ error: message })
}

export default ErrorHandler()
