import { RequestHandler } from "express";
// Sub modules
export * as errorController from './error-controllers'
export * as citiesController from './cities-controllers'
// '/api' index controller
export const mainApiController: RequestHandler = (req, res, next) => {
    res.send('Hello There')
}