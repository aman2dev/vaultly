import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./passport";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());


app.get("/", (req, res) => {
    res.send("hey");
})

//routes
app.use("/api/v1/", router)



app.listen(3000, () => {
    console.log("server started on port 3000")
})