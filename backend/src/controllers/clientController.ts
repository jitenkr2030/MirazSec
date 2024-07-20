import { Request, Response } from 'express';
import clientService from '../services/clientService';

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations like createClient, updateClient, deleteClient
