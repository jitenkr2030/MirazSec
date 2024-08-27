<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
=======
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
>>>>>>> 494f1f056fe7f073ea0a0bcd777aa7aacc500238
