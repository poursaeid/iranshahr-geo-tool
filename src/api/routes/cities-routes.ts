import { Router } from "express";
import { citiesController } from "../controllers";
import { passCitiesDataMiddleware } from "../Middlewares";

const router = Router()
// Middlewares
router.use(passCitiesDataMiddleware)

/* Routes : '/api/cities' */

/**
 * @openapi
 * '/api/cities':
 *  get:
 *      description: Information about all cities and their names in supported languages.
 *      responses:
 *          200:
 *              description: Returns an array of objects.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/', citiesController.getAll)

/**
 * @openapi
 * '/api/cities/list/{lang}':
 *  get:
 *      description: List of cities by selected language.
 *      parameters: 
 *          - in: path
 *            name: lang
 *            required: true
 *            description: Based on supported languages.
 *      responses:
 *          200:
 *              description: Returns an array of strings.
 *          422:
 *              description: Client error for entering wrong parameter.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/list/:lang', citiesController.getCititesListByLang)

/**
 * @openapi
 * '/api/cities/{city}/{lang}':
 *  get:
 *      description: Returns information about a specific city based on the language parameter.
 *      parameters: 
 *          - in: path
 *            name: city
 *            required: true
 *            description: A string of available city.
 *          - in: path
 *            name: langs
 *            required: true
 *            description: A string of supported languages.
 *      responses:
 *          200:
 *              description: Returns an object.
 *          404:
 *              description: No data.
 *          422:
 *              description: Client error for entering wrong parameter.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/:city/:lang', citiesController.getCityByLang)

// To use the require() method
export = router