import { Request, Response } from 'express';

export const incidentController = async (req: Request, res: Response) => {
  try {
    // Your code here
  } catch (error: any) {
    res.status(400).json({ message: (error as Error).message });
  }
};
