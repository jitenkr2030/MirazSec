import { Router } from 'express';
import { initiatePayment } from '../controllers/paymentController';

const router = Router();

router.post('/pay', initiatePayment);

export default router;
