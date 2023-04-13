import { RequestHandler } from "express";
import { getJSONRes } from "../../types";

// Sub modules
export * as errorController from './error-controllers'
export * as citiesController from './cities-controllers'
export * as districtsController from './districts-controller'

// '/api' index controller
export const mainApiController: RequestHandler = (req, res, next) => {
    const toSend = getJSONRes(req, { status: 200, success: true, messsage: 'Hello There' })
    res.status(toSend.status).send(toSend)
}