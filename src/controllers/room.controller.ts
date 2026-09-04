//========== Imports =========
import type { Response } from "express";
import roomService from "../services/room.service.ts";

//========== Logic ==========
// const getById = async (request, response, next) => {
//     try {
//         const room = await roomService.getById(request.params.id);
//         response.status(200).json(room);
//     } catch (error) {
//         next(error);
//     }
// };

const getAll = async (response:Response) => {
    try {
        const rooms = await roomService.getAll();
        return response.status(200).json(rooms);
    } catch {
        return response.status(500);
    };
};
// const create = async () => {};
// const updateOne = async () => {};
// const deleteOne = async () => {};

//export default {getById, getAll, create, updateOne, deleteOne};

export default {getAll};