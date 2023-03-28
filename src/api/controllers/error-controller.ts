import { ErrorRequestHandler, RequestHandler } from "express";

export const get404: RequestHandler = (req, res, next) => {
    res.status(404).send('404')
}

export const get500: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('500')
}