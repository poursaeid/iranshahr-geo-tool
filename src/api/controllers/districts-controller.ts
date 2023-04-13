import { RequestHandler } from "express";
import { getJSONRes } from "../../types";

export const getAll: RequestHandler = (req, res, next) => { 
    // Get data from the previous middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.districts })
    res.status(toSend.status).send(toSend)
}