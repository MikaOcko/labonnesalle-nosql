// ============ Imports ==============
import roomRepository from "../repositories/room.repository.ts";

// ============ Logic ==========
// Type
type Room = {
    label: string;
    capacity: number;
    site: string;
    building: string;
    floor: number;
    material: string[];
};

const getById = async (id: string) => {
    const room = await roomRepository.findById(id);
    if (!room) {
        throw new Error("room not found");
    }
    return room;
};

const getAll = async () => {
    const rooms = await roomRepository.getRooms();
    if(!rooms){
        throw new Error("rooms not found");
    };
    return rooms;
};

const createOne = async (room : Room) => {
    const newRoom = await roomRepository.createOne(room);
    if(!newRoom){
        throw new Error("Room not created");
    }
    return newRoom;
};

const updateOne = async (id:string, updateData: Partial<Room>) => {
    const updateRoom = await roomRepository.updateOne(id, updateData);
    return updateRoom;
};

const deleteOne = async (id: string) => {
    const deletedeRoom = await roomRepository.deleteOne(id);
    return deletedeRoom;
};

export default {getAll, getById, createOne, deleteOne, updateOne};