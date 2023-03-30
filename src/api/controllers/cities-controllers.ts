import { RequestHandler } from "express";
import { jsonReader } from "../utils";
import { CITIES_PATH } from "../../configs";
import { getJSONRes } from "../../types";

export const getAll: RequestHandler = (req, res, next) => {
    // Get cities data
    jsonReader(CITIES_PATH, (err, data) => {
        // Check for errors and pass it to the next error handler if there is any.
        if (err) next(err)
        // Send data to the client
        else {
            const toSend = getJSONRes(req, { success: true, status: 200, data: data })
            res.status(toSend.status).send(toSend)
        }
    })
}
