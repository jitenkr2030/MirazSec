<<<<<<< HEAD
import { createClient } from 'redis';

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

export default client;
=======
import { createClient } from 'redis';

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

export default client;
>>>>>>> 494f1f056fe7f073ea0a0bcd777aa7aacc500238
