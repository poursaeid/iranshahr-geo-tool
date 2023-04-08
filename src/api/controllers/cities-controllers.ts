import { RequestHandler } from "express";
import { getJSONRes } from "../../types";

export const getAll: RequestHandler = (req, res, next) => {
    // Get cities data from the previous middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.cities })
    res.status(toSend.status).send(toSend)
}
