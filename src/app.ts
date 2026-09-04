import Express from "express";
import { connectDatabase } from "./config/mongo.database.ts"
import roomRouter from "./routes/room.router.ts";

// --------- Variables ----------
const express = Express;
const app = express();
const port = 3000;

// ---------- Logic ----------
connectDatabase();
app.get("/", (request, response) => {
    response.send("hello two");
});

// Middleware pour parser le JSON
app.use(express.json());

app.use("/api", roomRouter);

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});

