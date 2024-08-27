<<<<<<< HEAD
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import resolvers from './resolvers';
import typeDefs from './schema';
import connectDB from './config/db';

const app = express();

connectDB();

app.use(cors({
    origin: 'http://188.245.85.201:3000',  // Update with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

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
=======
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
>>>>>>> 494f1f056fe7f073ea0a0bcd777aa7aacc500238
