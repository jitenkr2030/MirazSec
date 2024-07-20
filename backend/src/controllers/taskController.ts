import { Request, Response } from 'express';
import taskService from '../services/taskService';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations like createTask, updateTask, deleteTask
