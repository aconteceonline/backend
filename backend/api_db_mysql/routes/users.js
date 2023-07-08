import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

// o metodo getUsuers é chamado no controllers
router.get("/", getUsers);

export default router;
