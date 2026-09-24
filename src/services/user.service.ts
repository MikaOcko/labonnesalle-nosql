// ============ Imports ==============
import userRepository from "../repositories/user.repository.ts";

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
export default {getAll, getById};