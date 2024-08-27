import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // or replace `any` with the specific type of `user` if known
    }
  }
}
