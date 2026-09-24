import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("hey");
})


app.listen(3000, () => {
    console.log("server started on port 3000")
})