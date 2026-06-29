import express from "express"
import {CréerNouveauCompte} from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/signin', CréerNouveauCompte);

export default router;