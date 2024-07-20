import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import connectDB from './config/db';
import redisClient from './config/redis';
import authMiddleware from './middlewares/auth';
import errorMiddleware from './middlewares/error';
import securityMiddleware from './middlewares/security';

const app = express();
securityMiddleware(app);

app.use(express.json());
app.use(authMiddleware);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: req.user }),
});

server.applyMiddleware({ app });

app.use(errorMiddleware);

connectDB();

export default app;
