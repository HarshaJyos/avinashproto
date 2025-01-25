import mongoose from 'mongoose';

// Define the interface for environment variables to ensure type safety
interface Env {
  MONGO_URI: string;
}

// Use a fallback for MONGO_URI in case it's not available in the environment variables
const env: Env = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://harshajyosyabhatla:c41pky7ehExN9ELp@avinash.pdqht.mongodb.net/?retryWrites=true&w=majority&appName=avinash', // Fallback to empty string if not set
};

if (!env.MONGO_URI) {
  console.error('[MongoDB] MONGO_URI is not defined in the environment variables.');
  process.exit(1); // Exit the process if environment variable is missing
}

export async function connectDB(): Promise<void> {
  try {
    // Connect to MongoDB without unnecessary options
    await mongoose.connect(env.MONGO_URI, {
      dbName: 'avinash', // Replace with your actual database name if needed
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('[MongoDB] Successfully connected.');
    });

    connection.on('error', (err) => {
      console.error('[MongoDB] Connection error:', err.message);
      process.exit(1); // Exit the process with an error code on connection error
    });

    connection.on('disconnected', () => {
      console.warn('[MongoDB] Connection disconnected.');
    });

  } catch (error) {
    if (error instanceof Error) {
      console.error('[MongoDB] Failed to connect:', error.message);
    } else {
      console.error('[MongoDB] An unknown error occurred during connection.');
    }
    process.exit(1); // Exit the process with an error code
  }
}

// Graceful shutdown handler for process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('[MongoDB] Connection closed due to app termination.');
  process.exit(0);
});