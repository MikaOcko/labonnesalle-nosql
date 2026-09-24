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

export default {getAll};