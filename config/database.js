import mongoose from "mongoose";

let connected = false;

export default async function connectDB() {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGOBODB_URI);
    connected = true;
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
  }
}
