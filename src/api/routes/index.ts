import { Router } from "express";
import { citiesController, indexRedirectController } from "../controllers";

const router = Router()

/* Base path : /api */
router.get('/', indexRedirectController)
router.use('/cities', require('./cities-routes'))

/**
 * @openapi
 * '/api/cities/langs':
 *   get:
 *     description: Supported Languages
 *     responses:
 *       200:
 *         description: Returns an array of strings.
 *       500: 
 *         description: Internal server Error.
 */
router.get('/cities/langs', citiesController.getLangs) // get langs without using the passCitiesDataHandler Middleware

router.use('/districts/fa', require('./districts-routes'))

export default router