//routes for v2 exported from UserController while v1 controllers are excluded
import express from "express";
import {
  getAllUsersV2,
  getUserByIdV2,
  createUserV2,
} from "../../controllers/UserController.js";
import { validateUserV2 } from "../../validators/userValidator.js";

const router = express.Router();

router.get("/", getAllUsersV2);
router.post("/", validateUserV2, createUserV2);
router.get("/:id", getUserByIdV2);

export default router;
