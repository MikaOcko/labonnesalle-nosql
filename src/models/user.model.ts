// ========== Imports ===========
import mongoose from "mongoose";

// ========== Logic ==========
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
});

export const UserModel = mongoose.model("User", userSchema, "users");