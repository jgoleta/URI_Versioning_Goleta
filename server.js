import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/v1/UserRoutes.js"; //importing v1 routes
import UserRoutesV2 from "./routes/v2/UserRoutes.js"; //importing v2 routes

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/v1/users", UserRoutes); //using v1 routes for /api/v1/users
app.use("/api/v2/users", UserRoutesV2); //using v2 routes for /api/v2/users

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
