import express from "express";
const app = express();
import dotenv from "dotenv";
import Connectdb from "./database/database.js";
import cloudinary from "./database/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;
Connectdb();
cloudinary();
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/product", productRouter);

app.listen(PORT, () => console.log("Server started on port " + PORT));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
