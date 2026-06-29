import express from "express"
import {CréerNouveauCompte,loginController} from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/signin', CréerNouveauCompte);
router.get('/login',loginController)

export default router;