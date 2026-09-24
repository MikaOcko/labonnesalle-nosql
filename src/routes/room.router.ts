//=========== Imports ==========
import express from "express";
import roomController from "../controllers/room.controller.ts";
import { roomSchema, roomUpdateSchema } from "../schemas/roomSchema.ts";
import { validateData } from "../middlewares/validationMiddleware.ts";
// import checkExists from "../middlewares/checkExists.middleware.ts";

//========== Logic ===========
const roomRouter = express.Router();

roomRouter.get("/rooms", roomController.getAll);
roomRouter.get("/rooms/:id", roomController.getById);
roomRouter.post("/rooms", validateData(roomSchema), roomController.createOne);
roomRouter.patch("/rooms/:id", validateData(roomUpdateSchema), roomController.updateOne);
// roomRouter.delete("/rooms/:id", checkExists, roomController.deleteOne);
roomRouter.delete("/rooms/:id", roomController.deleteOne);

export default roomRouter;