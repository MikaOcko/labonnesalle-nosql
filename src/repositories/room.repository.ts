//========== Imports ===========
import { RoomModel } from "../models/room.model.ts";
// =========== Logic ===========
// Type
type Room = {
    label: string;
    capacity: number;
    site: string;
    building: string;
    floor: number;
    material: string[];
};

// Retrieve one room by ID : not functional !!!
const findById = async (id: string) => {
    return RoomModel.findById(id);
};

// Retrieve all rooms
const getRooms = async () => {
    const rooms = await RoomModel.find();
    console.log("Rooms found:", rooms); // check if receive sth
    return rooms;
};

// Create new room
const createOne = (room : Room) => {
    const newRoom = RoomModel.create(room);
    console.log("Room created");
    return newRoom;
};

export default {getRooms, findById, createOne};