//========== Imports ===========

import { UserModel } from "../models/user.model.ts";
import type { UserType } from "../types/user.type.ts";

// =========== Logic ===========
// Function to retrieve all users
const getUsers = async () => {
    const users = await UserModel.find();
    console.log("Users found:", users); // check if receive sth
    return users;
};

// Retrieve one user by ID 
const getUser = async (id: string) => {
    return UserModel.findById(id);
};

// Create new user
const createOne = (user : UserType) => {
    const newUser = UserModel.create(user);
    console.log("✅ User created");
    return newUser;
};

// Delete one user
const deleteOne = (id: string) => {
    const deletedUser = UserModel.deleteOne({ _id: id });
    // const deletedUser = await UserModel.findByIdAndDelete(id);
    console.log("🚮 User deleted");
    return deletedUser;
};

export default {getUsers, getUser, createOne, deleteOne};