import { Request, Response, NextFunction } from 'express';
import redis from '../config/redis';

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const key = req.originalUrl;

  redis.get(key, (err, data) => {
    if (err) {
      console.error(err);
      next();
    } else if (data) {
      res.send(JSON.parse(data));
    } else {
      res.sendResponse = res.send;
      res.send = (body: any) => {
        redis.setex(key, 3600, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    }
  });
};
