// ============ Imports ==============
import roomRepository from "../repositories/room.repository.ts";

// ============ Logic ==========
// const getById = async (id: string) => {
//     const room = await roomRepository.findById(id);
//     if (!room) {
//         throw new Error("room not found");
//     }
//     return room;
// };

const getAll = async () => {
    const rooms = await roomRepository.getRooms();
    if(!rooms){
        throw new Error("rooms not found");
    };
    return rooms;
};
// const create = async () => {};
// const updateOne = async () => {};
// const deleteOne = async () => {};

// export default {getById,getAll, create, updateOne, deleteOne};
export default {getAll};