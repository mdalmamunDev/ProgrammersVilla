import express from 'express';
import { addProgrammer, getProgrammer } from '../controllers/programmer.controller.js';

const router = express.Router();

router.get("/", getProgrammer);
router.post("/addProgrammer", addProgrammer);

export default router;