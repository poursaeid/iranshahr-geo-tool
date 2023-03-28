import { RequestHandler } from "express";

// '/api' controller
export const mainApiController: RequestHandler = (req, res, next) => {
    res.send('Hello There')
}