//========== Imports ===========
import { RoomModel } from "../models/room.model.ts";
// =========== Logic ===========
const findById = async (id: string) => {
    return RoomModel.findById(id);
};

const getRooms = async () => {
    const rooms = await RoomModel.find();
    console.log("Rooms found:", rooms); // check if receive sth
    return rooms;
};


export default {getRooms, findById};