import mongoose from "mongoose";

function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(error);
  }
}


export default connectMongoDB;

