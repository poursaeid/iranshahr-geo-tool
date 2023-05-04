import { Router } from "express";
import { citiesController, indexRedirectController } from "../controllers";

const router = Router()

/* Base path : /api */
router.get('/', indexRedirectController)
router.use('/cities', require('./cities-routes'))
router.get('/cities/langs', citiesController.getLangs) // get langs without using the passCitiesDataHandler Middleware
router.use('/districts/fa', require('./districts-routes'))

export default router