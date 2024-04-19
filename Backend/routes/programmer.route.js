import express from 'express';
import { getProgrammer } from '../controllers/programmer.controller.js';

const router = express.Router();

router.get("/", getProgrammer);

export default router;