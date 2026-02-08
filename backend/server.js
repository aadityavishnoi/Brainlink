import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postsRoute from "./routes/posts.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRoute);

app.get("/", (req, res) => {
    res.send("Backend Is Running!");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running!");
});