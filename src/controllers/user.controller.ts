//========== Imports =========
import type { NextFunction, Request, Response } from "express";
import userService from "../services/room.service.ts";

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