import { Payment } from '../models/payment';

export const processPayment = async (amount: number, currency: string) => {
    // Implement payment processing logic here
    const payment = new Payment({ amount, currency });
    await payment.save();
    return { status: 'success', payment };
};
