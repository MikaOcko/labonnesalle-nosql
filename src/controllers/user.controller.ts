//========== Imports =========
import type { NextFunction, Request, Response } from "express";
import userService from "../services/user.service.ts";

//========== Logic ==========
// Function to retrieve all users
const getAll = async (request:Request, response:Response) => {
    try {
        const users = await userService.getAll();
        return response.status(200).json(users);
    } catch {
        return response.status(500).json({ error: "Internal server error" })
    };
};

// Function to retrieve one user
const getById = async (request:Request<{id: string}>, response:Response, next:NextFunction) => {
    try {
        const user = await userService.getById(request.params.id);
        response.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export default {getAll, getById};