//========== Imports ===========
import roomService from "../services/room.service.ts";

// //========== Logic ==========
// const checkExists = async (request, response, next) => {
//     const room = await roomService.getById(request.params.id);

//     if (!room) {
//         return response.status(404).json({
//             message: "Room not found",
//         });
//     }
//     request.room = room;
//     next();
// };

// export default { checkExists };