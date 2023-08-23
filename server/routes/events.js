import express from "express";
import { getEvents, postEvent } from "../controllers/events.js";
const router = express.Router();

router.route("/").get(getEvents);
router.route("/").post(postEvent);

export default router;
