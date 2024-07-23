import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import resolvers from './resolvers';
import typeDefs from './schema';
import connectDB from './config/db';

const app = express();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: req.user })
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
