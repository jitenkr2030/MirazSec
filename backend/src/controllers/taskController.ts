<<<<<<< HEAD
import { Request, Response } from 'express';

export const taskController = async (req: Request, res: Response) => {
  try {
    // Your code here
  } catch (error: any) {
    res.status(400).json({ message: (error as Error).message });
  }
};
=======
import { Request, Response } from 'express';

export const taskController = async (req: Request, res: Response) => {
  try {
    // Your code here
  } catch (error: any) {
    res.status(400).json({ message: (error as Error).message });
  }
};
>>>>>>> 494f1f056fe7f073ea0a0bcd777aa7aacc500238
