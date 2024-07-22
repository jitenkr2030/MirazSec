import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema({
    service: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});

export const Pricing = mongoose.model('Pricing', pricingSchema);
