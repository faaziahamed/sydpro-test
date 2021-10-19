import express from "express";
import MessageController from "../controllers/MessageController";
const router = express.Router();

router.get("/messages", MessageController.getMessages);
router.get("/messages/:id", MessageController.getMessage);
router.put("/messages/:id", MessageController.updateMessage);

export = router;
