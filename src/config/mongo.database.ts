// =========== Imports ==========
import mongoose from "mongoose";

// ========== Logic ==========
export const connectDatabase = async () => {
    await
    mongoose.connect("mongodb://localhost:27017");
    console.log("Database connected");
};