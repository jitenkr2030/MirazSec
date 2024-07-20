import { Request, Response } from 'express';
import incidentService from '../services/incidentService';

export const getAllIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await incidentService.getAllIncidents();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations like createIncident, updateIncident, deleteIncident
