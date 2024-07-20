import { Request, Response } from 'express';
import fieldOfficerService from '../services/fieldOfficerService';

export const getAllFieldOfficers = async (req: Request, res: Response) => {
  try {
    const officers = await fieldOfficerService.getAllFieldOfficers();
    res.status(200).json(officers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations like createFieldOfficer, updateFieldOfficer, deleteFieldOfficer
