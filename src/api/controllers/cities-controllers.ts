import { RequestHandler } from "express";
import { IHTTPRes, getJSONRes } from "../../types";
import { HTTPMessages, LANGS } from "../../configs/consts";

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
    // Default res to send if the param is invalid
    let resParams: IHTTPRes = { success: false, status: 422, messsage: HTTPMessages.wrongParam }

    if (isLangAvailable(lang)) {

        // Get cities data from the previous middleware if there isn't any error
        const { cities } = req.locals

        // Map to the cities data and get a list of them
        const citiesList = cities.map((city: ICities) => city[lang])

        resParams = { success: true, status: 200, data: citiesList, messsage: '' }
    }

    toSend = getJSONRes(req, resParams)
    res.status(toSend.status).send(toSend)

}

export const getCityByLang: RequestHandler = (req, res, next) => {
    let { city, lang } = req.params
    let toSend

    // Default res to send if the city isn't available
    let resParams: IHTTPRes = { success: false, status: 404, messsage: HTTPMessages.noData }

    // check if the lang parameter is available and send 422 if there isn't any
    if (isLangAvailable(lang)) {

        // Get cities data from the previous middleware if there isn't any error
        const { cities } = req.locals

        // Map to the cities data and find the entered city
        cities.map((item: ICities) => {
            let cityItem = item[lang]
            // Convert to lower case if selected lang is english
            if (lang === 'en') {
                cityItem = cityItem.toLowerCase()
                city = city.toLowerCase()
            }

            if (cityItem === city) {
                resParams = { success: true, status: 200, data: item, messsage: '' }
            }
        })

    } else {
        // Res for wrong parameters
        resParams = { success: false, status: 422, messsage: HTTPMessages.wrongParam }
    }

    // Sending the res
    toSend = getJSONRes(req, resParams)
    res.status(toSend.status).send(toSend)

}


const isLangAvailable = (lang: string) => {
    return LANGS.includes(lang)
}