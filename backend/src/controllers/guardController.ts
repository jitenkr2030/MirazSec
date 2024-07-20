import { Request, Response } from 'express';
import guardService from '../services/guardService';

export const getAllGuards = async (req: Request, res: Response) => {
  try {
    const guards = await guardService.getAllGuards();
    res.status(200).json(guards);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations like createGuard, updateGuard, deleteGuard
