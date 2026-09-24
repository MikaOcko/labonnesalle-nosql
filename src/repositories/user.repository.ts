//========== Imports ===========

import { UserModel } from "../models/user.model.ts";

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

export default {getUsers, getUser};