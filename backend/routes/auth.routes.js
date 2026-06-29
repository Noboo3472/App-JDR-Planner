import express from "express"
import {CréerNouveauCompte,loginController,suppressionController} from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/signin', CréerNouveauCompte);
router.post('/login',loginController)
router.delete('/delete/:id', suppressionController)

export default router;