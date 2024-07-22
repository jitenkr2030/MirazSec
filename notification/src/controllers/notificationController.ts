import { Request, Response } from 'express';
import { sendNotification } from '../services/notificationService';

export const createNotification = async (req: Request, res: Response) => {
  try {
    const { userId, message } = req.body;
    const notification = await sendNotification(userId, message);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error sending notification', error });
  }
};
