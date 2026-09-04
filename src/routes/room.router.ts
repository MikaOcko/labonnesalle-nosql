//=========== Imports ==========
import express from "express";
import roomController from "../controllers/room.controller.ts";
// import checkExists from "../middlewares/checkExists.middleware.ts";

//========== Logic ===========
const roomRouter = express.Router();

roomRouter.get("/rooms", roomController.getAll);
roomRouter.get("/rooms/:id", roomController.getById);
roomRouter.post("/rooms", roomController.createOne);
// roomRouter.patch("/rooms/:id", roomController.updateOne);
// roomRouter.delete("/rooms/:id", checkExists, roomController.deleteOne);

export default roomRouter;