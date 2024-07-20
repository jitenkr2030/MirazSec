import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export default (app: any) => {
  app.use(helmet());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
};
