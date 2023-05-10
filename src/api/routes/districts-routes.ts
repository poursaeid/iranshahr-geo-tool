import { Router } from "express";
import { passDistrictsDataMiddleware } from "../Middlewares";
import { districtsController } from "../controllers";

const router = Router()

router.use(passDistrictsDataMiddleware)

// Routes : '/api/districts/fa'

/**
 * @openapi
 * '/api/districts/fa':
 *  get:
 *      description: Information about all provinces,cities and towns in farsi.
 *      responses:
 *          200:
 *              description: Returns a nested object.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/', districtsController.getAll)

/**
 * @openapi
 * '/api/districts/fa/provinces':
 *  get:
 *      description: List of the available provinces.
 *      responses:
 *          200:
 *              description: Returns an array of strings.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/provinces', districtsController.getProvincesList)

/**
 * @openapi
 * '/api/districts/fa/cities/{province}':
 *  get:
 *      description: List of the available provinces.
 *      parameters: 
 *          - in: path
 *            name: province
 *            required: true
 *            description: A string of available province.
 *      responses:
 *          200:
 *              description: Returns an array of strings.
 *          404:
 *              description: No data.
 *          422:
 *              description: Client error for entering wrong parameter.
 *          500: 
 *              description: Internal server Error.
 */
router.get('/cities/:province', districtsController.getCitiesListByProvince)


/**
 * @openapi
 * '/api/districts/fa/towns/{province}-{city}':
 *  get:
 *      description: List of the available provinces.
 *      parameters: 
 *          - in: path
 *            name: province
 *            required: true
 *            description: A string of available province.
 *          - in: path
 *            name: city
 *            required: true
 *            description: A string of available city.
 *      responses:
 *          200:
 *              description: Returns an Array of strings.
 *          404:
 *              description: No data.
 *          422:
 *              description: Client error for entering wrong parameter.
 *          500: 
 *              description: Internal server Error.
*/
router.get('/towns/:province-:city', districtsController.getTownsList)

/**
 * @openapi
 * '/api/districts/fa/towns-info/{province}-{city}-{town}':
 *  get:
 *      description: List of the available provinces.
 *      parameters: 
 *          - in: path
 *            name: province
 *            required: true
 *            description: A string of available province.
 *          - in: path
 *            name: city
 *            required: true
 *            description: A string of available city.
 *          - in: path
 *            name: town
 *            required: true
 *            description: A string of available town.
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
router.get('/towns-info/:province-:city-:town', districtsController.getTownInfo)

export = router 