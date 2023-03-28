import { ErrorRequestHandler, RequestHandler } from "express";
import { getJSONRes } from "../../types";

export const get404: RequestHandler = (req, res, next) => {
    const toSend = getJSONRes(req, { success: false, status: 404, messsage: 'Not Found' })
    res.status(toSend.status).send(toSend)
}

export const get500: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    const toSend = getJSONRes(req, { success: false, status: 500, messsage: 'Internal server Error' })
    res.status(toSend.status).send(toSend)
}