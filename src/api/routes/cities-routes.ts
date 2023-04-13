import { Router } from "express";
import { citiesController } from "../controllers";
import { passCitiesDataMiddleware } from "../Middlewares";

const router = Router()
// Middlewares
router.use(passCitiesDataMiddleware)

// Routes : '/api/cities'
router.get('/', citiesController.getAll)
router.get('/list/:lang', citiesController.getCititesListByLang)
router.get('/:city/:lang', citiesController.getCityByLang)
// To use the require() method
export = router