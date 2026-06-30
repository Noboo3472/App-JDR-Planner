import express, { Router } from "express"
import{creerTable,supprimerTableController} from "../controllers/tableManagement.controller.js"

const router = express.Router()

router.post('/newTable',creerTable)
router.delete('/deleteTable/:id',supprimerTableController)

export default router;