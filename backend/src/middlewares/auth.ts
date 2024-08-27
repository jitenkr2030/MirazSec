// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Received request at auth middleware:', req.body);
  // Here, add your actual authentication logic
  next();
};

export default authMiddleware;
