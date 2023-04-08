import { Router } from "express";
import { citiesController, mainApiController } from "../controllers";

const router = Router()

/* Base path : /api */
router.get('/', mainApiController)
router.use('/cities', require('./cities-routes'))
router.get('/cities/langs', citiesController.getLangs) // get langs without using the passCitiesDataHandler Middleware

export default router