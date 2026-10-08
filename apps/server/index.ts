import express, { json } from "express";
import cors from "cors";

import { router } from "./routes";

const app = express();

app.use(json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("hey");
})

//routes
app.use("/api/v1/", router)



app.listen(3000, () => {
    console.log("server started on port 3000")
})