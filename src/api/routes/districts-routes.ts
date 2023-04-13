import { Router } from "express";
import { passDistrictsDataMiddleware } from "../Middlewares";
import { districtsController } from "../controllers";

const router = Router()

router.use(passDistrictsDataMiddleware)

// Routes : '/api/districts/fa'
router.get('/', districtsController.getAll)
export = router