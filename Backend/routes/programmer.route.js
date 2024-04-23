import express from 'express';
import { addProgrammer, dropProgrammer, editProgrammer, getProgrammer } from '../controllers/programmer.controller.js';

const router = express.Router();

router.get("/", getProgrammer);
router.post("/addProgrammer", addProgrammer);
router.put("/editProgrammer", editProgrammer);
router.post("/dropProgrammer", dropProgrammer);

export default router;