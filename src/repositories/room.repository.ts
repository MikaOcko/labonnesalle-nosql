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
    console.log("✅ Room created");
    return newRoom;
};

// Delete one room
const deleteOne = (id: string) => {
    const deletedRoom = RoomModel.deleteOne({ _id: id });
    // const deletedRoom = await RoomModel.findByIdAndDelete(id);
    console.log("🚮 Room deleted");
    return deletedRoom;
};

// Update a room
const updateOne = async (id: string, updateData: Partial<Room>) => {
  const updatedRoom = await RoomModel.findByIdAndUpdate(
    id,
    updateData,
    { returnDocument: 'after'}
  );

  console.log("↪️ Room updated");
  return updatedRoom;
};

export default {getRooms, findById, createOne, deleteOne, updateOne};