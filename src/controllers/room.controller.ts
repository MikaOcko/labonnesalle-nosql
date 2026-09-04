//========== Imports =========
import type { NextFunction, Request, Response } from "express";
import roomService from "../services/room.service.ts";

//========== Logic ==========
const getById = async (request:Request<{id: string}>, response:Response, next:NextFunction) => {
    try {
        const room = await roomService.getById(request.params.id);
        response.status(200).json(room);
    } catch (error) {
        next(error);
    }
};

const getAll = async (request:Request, response:Response) => {
    try {
        const rooms = await roomService.getAll();
        return response.status(200).json(rooms);
    } catch {
        return response.status(500).json({ error: "Internal server error" })
    };
};
const createOne = async (request:Request, response:Response, next : NextFunction) => {
    try {
        const newRoom = await roomService.createOne(request.body);
        return response.status(201).json(newRoom); //status 201 : created
    } catch(error) {
        // Gestion des erreurs
        next(error);
    }
};

// const updateOne = async () => {};
// const deleteOne = async () => {};

//export default {getById, getAll, create, updateOne, deleteOne};

export default {getAll, getById, createOne};