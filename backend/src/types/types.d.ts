// src/types/express.d.ts
import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Replace `any` with the actual type if you have one
    }
  }
}
