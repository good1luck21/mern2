import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import postRoute from "./routes/posts.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/posts", postRoute);

app.listen(5555, success);

function success() {
  db();
  console.log("Server is running on port 5555");
}
