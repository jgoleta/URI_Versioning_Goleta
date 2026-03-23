//original routes for v1 while v2 controllers are exluded
import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/UserController.js";
import { validateUser } from "../../validators/userValidator.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", validateUser, createUser);
router.get("/:id", getUserById);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

export default router;
