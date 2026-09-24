//=========== Imports ==========
import express from "express";
import userController from "../controllers/user.controller.ts";

//========== Logic ===========
const userRouter = express.Router();

userRouter.get("/users", userController.getAll);
// userRouter.get("/users/:id", userController.getById);
// userRouter.post("/users", userController.createOne);
// userRouter.patch("/users/:id", userController.updateOne);
// userRouter.delete("/users/:id", userController.deleteOne);

export default userRouter;