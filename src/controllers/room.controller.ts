//========== Imports =========
import type { NextFunction, Request, Response } from "express";
import roomService from "../services/room.service.ts";
import type { RoomType } from "../types/room.type.ts";

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

const updateOne = async (request: Request<{ id: string }, any, Partial<RoomType>>, response: Response, next: NextFunction) => {
  try {
    const id = request.params.id;
    const updateData = request.body;
    
    const updatedRoom = await roomService.updateOne(id, updateData);
    response.status(200).json(updatedRoom);

    } catch (error) {
        next(error);
    };
};

const deleteOne = async (request:Request<{id: string}>, response:Response, next:NextFunction) => {
    try{
        const deletedRoom = await roomService.deleteOne(request.params.id);
        response.status(200).json(deletedRoom);
    } catch(error) {
        next(error);
    };
};

export default {getAll, getById, createOne, deleteOne, updateOne};