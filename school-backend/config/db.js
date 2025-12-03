import mongoose from "mongoose";

const connectDB = async () => {
  const defaultUri = "mongodb://127.0.0.1:27017/school-management";
  const mongoUri = process.env.MONGO_URI || defaultUri;

  if (!process.env.MONGO_URI) {
    console.warn(
      `MONGO_URI not found in environment. Falling back to local MongoDB at ${defaultUri}`
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB. Please verify your MONGO_URI.");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
