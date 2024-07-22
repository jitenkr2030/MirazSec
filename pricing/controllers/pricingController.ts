import { Request, Response } from 'express';
import { getPricing, setPricing } from '../services/pricingService';

export const fetchPricing = async (req: Request, res: Response) => {
    try {
        const pricingList = await getPricing();
        res.status(200).json(pricingList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pricing', error });
    }
};

export const updatePricing = async (req: Request, res: Response) => {
    try {
        const { service, price } = req.body;
        const newPricing = await setPricing(service, price);
        res.status(200).json(newPricing);
    } catch (error) {
        res.status(500).json({ message: 'Error updating pricing', error });
    }
};
