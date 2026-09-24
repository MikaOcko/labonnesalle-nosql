// ============ Imports ==============
import userRepository from "../repositories/user.repository.ts";
import type { UserType } from "../types/user.type.ts";

// ============ Logic ==========
// Function to retrieve all users
const getAll = async () => {
    const users = await userRepository.getUsers();
    if(!users){
        throw new Error("users not found");
    };
    return users;
};

// Function to retrieve one user by id
const getById = async (id: string) => {
    const user = await userRepository.getUser(id);
    if (!user) {
        throw new Error("user not found");
    }
    return user;
};

// Function to create new user
const createOne = async (user : UserType) => {
    const newUser = await userRepository.createOne(user);
    if(!newUser){
        throw new Error("Room not created");
    }
    return newUser;
};
export default {getAll, getById, createOne};