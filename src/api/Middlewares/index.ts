import { RequestHandler } from "express";
import { jsonReader } from "../utils";
import { CITIES_PATH } from "../../configs";

/** Read and pass the cities data to the request object */
export const passCitiesDataMiddleware: RequestHandler = (req, res, next) => {
    jsonReader(CITIES_PATH, (err, data) => {
        // Check for errors and pass it to the next error handler if there is any.
        if (err) next(err)
        // Pass data to the next request object
        else {
            req.locals = { ...req.locals, cities: data }
            next()
        }
    })
}
