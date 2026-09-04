//========== Imports ===========
import { RoomModel } from "../models/room.model.ts";
// =========== Logic ===========
// const findById = async (id: string) => {
//     return RoomModel.findById(id);
// };
// const create = async (data: {name: string}) => {
//     return RoomModel.insertOne({
//         // data,
//     });
// };

const getRooms = async () => {
    return RoomModel.find();
};


export default {getRooms};