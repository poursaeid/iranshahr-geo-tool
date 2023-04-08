import { RequestHandler } from "express";
import { getJSONRes } from "../../types";
import { LANGS } from "../../configs/consts";

export const getAll: RequestHandler = (req, res, next) => {
    // Get cities data from the previous middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.cities })
    res.status(toSend.status).send(toSend)
}

export const getLangs: RequestHandler = (req, res, next) => {
    // Available languages
    const toSend = getJSONRes(req, { success: true, status: 200, data: LANGS })
    res.status(toSend.status).send(toSend)
}

export const getCititesListByLang: RequestHandler = (req, res, next) => {
    const { lang } = req.params

    let toSend
    // Send an Error if the lang parameter isn't available
    if (!LANGS.includes(lang)) {
        toSend = getJSONRes(req, { success: false, status: 422, messsage: 'The entered parameter is not available' })
        res.status(toSend.status).send(toSend)
    }
    
    // Get cities data from the previous middleware if there isn't any error
    const { cities } = req.locals
    
    // Map to the cities data and get a list of them
    const citiesList = cities.map((city: ICities) => city[lang])
    
    toSend = getJSONRes(req, { success: true, status: 200, data: citiesList })
    res.status(toSend.status).send(toSend)
}