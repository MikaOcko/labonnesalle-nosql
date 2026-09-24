// =========== Imports ==========
import mongoose from "mongoose";

// ========== Logic ==========
export const connectDatabase = async () => {
    await
    mongoose.connect("mongodb://localhost:27017/database");
    console.log("🚀 Connected to Mongo DB");

    console.log("✅ Connected to DB:", mongoose.connection.db?.databaseName);
    
    const collections = await mongoose.connection.db?.listCollections().toArray();
    console.log("📁 Collections disponibles:", collections?.map(c => c.name));
    
    // Vérifie directement via Mongoose
    const countRoom = await mongoose.connection.db?.collection("rooms").countDocuments();
    console.log("📊 Nombre de documents dans 'rooms':", countRoom);
    const countUser = await mongoose.connection.db?.collection("users").countDocuments();
    console.log("📊 Nombre de documents dans 'users':", countUser);
};
