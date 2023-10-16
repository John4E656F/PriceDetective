import mongoose from 'mongoose';

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    return console.error('MONGODB_URI is not defined');
  }

  if (mongoose.connection.readyState === 1) {
    return console.log('=> using existing database connection');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  } finally {
    // Optionally add any cleanup code here
  }
};
