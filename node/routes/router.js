import express from 'express';
import { solicitarDato } from '../controllers/solicitarController.js';

const router = express.Router();

router.get('/solicitar', solicitarDato)

export default router;