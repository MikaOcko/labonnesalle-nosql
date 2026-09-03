import Express from "express";

// --------- Variables ----------
const express = Express;
const app = express();
const port = 3000;

// ---------- ?????----------
app.get("/", (request, response) => {
    response.send("hello world");
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});