import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, default: 'pending' },
}, {
    timestamps: true,
});

export const Payment = mongoose.model('Payment', paymentSchema);
