import { Request, Response } from 'express';

export const authController = async (req: Request, res: Response) => {
  try {
    // your code
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
