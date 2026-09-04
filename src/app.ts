import Express from "express";
import { connectDatabase } from "./config/mongo.database.ts"
import roomRouter from "./routes/room.router.ts";

// --------- Variables ----------
const express = Express;
const app = express();
const port = 3000;

// ---------- Logic ----------
// Database Check
connectDatabase();

// Middleware pour parser le JSON
app.use(express.json());
//Router
app.use("/api", roomRouter);
// Health check
app.get("/", (request, response) => {
    response.send("hello two");
});
// Start srver
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});

