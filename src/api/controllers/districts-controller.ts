import { RequestHandler } from "express";
import { getJSONRes } from "../../types";

export const getAll: RequestHandler = (req, res, next) => {
    // Get data from the previous middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.districts })
    res.status(toSend.status).send(toSend)
}

export const getProvincesList: RequestHandler = (req, res, next) => {
    // Loop in districts and get the first row keys
    const districts = req.locals.districts
    let firsRowKeys: Array<string> = []
    for (const key in districts) firsRowKeys.push(key)
    // Send Res
    const toSend = getJSONRes(req, { success: true, status: 200, data: firsRowKeys })
    res.status(toSend.status).send(toSend)
}