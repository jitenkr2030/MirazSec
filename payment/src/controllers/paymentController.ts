import { Request, Response } from 'express';
import { processPayment } from '../services/paymentService';

export const initiatePayment = async (req: Request, res: Response) => {
    try {
        const { amount, currency } = req.body;
        const paymentResult = await processPayment(amount, currency);
        res.status(200).json(paymentResult);
    } catch (error) {
        res.status(500).json({ message: 'Payment processing failed', error });
    }
};
