import { Router } from "express";
import { citiesController } from "../controllers";
import { passCitiesDataHandler } from "../Middlewares";

const router = Router()
// Middlewares
router.use(passCitiesDataHandler)

// Routes : '/api/cities'
router.get('/', citiesController.getAll)
router.get('/list/:lang', citiesController.getCititesListByLang)
// To use the require() method
export = router