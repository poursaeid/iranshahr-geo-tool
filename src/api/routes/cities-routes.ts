import { Router } from "express";
import { citiesController } from "../controllers";

const router = Router()
// '/api/cities'
router.get('/', citiesController.getAll)
// To use the require() method
export = router