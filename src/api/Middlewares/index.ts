import { RequestHandler } from "express";
import { jsonReader } from "../../utils";
import { CITIES_PATH, DISTRICTS_PATH } from "../../configs";

/** Read and pass the cities data to the request object */
export const passCitiesDataMiddleware: RequestHandler = (req, res, next) => {
    let { error, data } = jsonReader(CITIES_PATH)
    // Check for errors and pass it to the next error handler if there is any.
    if (error) next(error)
    // Pass data to the next request object
    req.locals = { ...req.locals, cities: data }
    next()
}

/** Read and pass the districts data to the request object */
export const passDistrictsDataMiddleware: RequestHandler = (req, res, next) => {
    let { error, data } = jsonReader(DISTRICTS_PATH)
    // Check for errors and pass it to the next error handler if there is any.
    if (error) next(error)
    // Pass data to the next request object
    req.locals = { ...req.locals, districts: data }
    next()
}
