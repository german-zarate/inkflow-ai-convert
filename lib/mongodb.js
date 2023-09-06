import mongoose from 'mongoose';

let isConnected = false;

// eslint-disable-next-line consistent-return
const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.log('Missing MongoDB URL');
  if (isConnected) {
    console.log('MongoDB connection already established');
    return 0;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true; // Set the connection status to true
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
