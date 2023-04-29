import { RequestHandler } from "express";
import { IHTTPRes, getJSONRes } from "../../types";
import { HTTPMessages } from "../../configs/consts";

// TODO: DRY 

export const getAll: RequestHandler = (req, res, next) => {
    // Get data from the previous middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.districts })
    res.status(toSend.status).send(toSend)
}

export const getProvincesList: RequestHandler = (req, res, next) => {
    // Loop in districts and get the first row keys
    const districts = req.locals.districts
    const province = provincesList(districts)
    // Send Res
    const toSend = getJSONRes(req, { success: true, status: 200, data: province })
    res.status(toSend.status).send(toSend)
}

export const getCitiesListByProvince: RequestHandler = (req, res, next) => {
    // Default res to send if the provine isn't available
    let resParams: IHTTPRes = { success: false, status: 404, messsage: HTTPMessages.noData }

    // Entered param
    const { province } = req.params

    // Get data from the previous middleware if there isn't any error
    const districts = req.locals.districts
    const provinces = provincesList(districts)

    // Check if the entered param is available
    if (provinces.includes(province)) {
        // Get district data
        for (const key in districts) if (key === province) {
            resParams = { success: true, status: 200, data: Object.keys(districts[key]) }
        }
    }
    else {
        // Wrong Param
        resParams = { success: false, status: 422, messsage: HTTPMessages.wrongParam }
    }

    // Sending the res
    const toSend = getJSONRes(req, resParams)
    res.status(toSend.status).send(toSend)

}

const provincesList = (districts: object[]) => {
    let firsRowKeys: Array<string> = []
    for (const elm in districts) firsRowKeys.push(elm)
    return firsRowKeys
}

export const getTownsList: RequestHandler = (req, res, next) => {
    // Set default response info as 404
    let resInfo: IHTTPRes = { success: false, status: 404, messsage: HTTPMessages.noData }

    // Request params 
    const { city, province } = req.params
    // Data from the previous Middleware
    const districts = req.locals.districts

    // Check for data
    for (const key in districts) if (key === province) {
        const provinces = districts[key]
        for (const citiesKey in provinces) if (citiesKey === city) {
            const townsKeys = Object.keys(provinces[citiesKey])
            resInfo = { success: true, status: 200, data: townsKeys }
            break
        }
        break
    }
    else {
        resInfo = { success: false, status: 422, messsage: HTTPMessages.wrongParam }
    }

    // Sending the responce
    const toSend = getJSONRes(req, resInfo)
    res.status(toSend.status).send(toSend)
}

export const getTownInfo: RequestHandler = (req, res, next) => {
    // Set default response info as 404
    let resInfo: IHTTPRes = { success: false, status: 404, messsage: HTTPMessages.noData }

    // Request params 
    const { city, province, town } = req.params
    // Data from the previous Middleware
    const districts = req.locals.districts

    // Check for data
    for (const key in districts) if (key === province) {
        const provinces = districts[key]
        for (const citiesKey in provinces) if (citiesKey === city) {
            const towns = provinces[citiesKey]
            for (const townKey in towns) if (townKey === town) {
                resInfo = { success: true, status: 200, data: towns[townKey] }
                break
            }
            break
        }
        break
    }
    else {
        resInfo = { success: false, status: 422, messsage: HTTPMessages.wrongParam }
    }

    // Sending the responce
    const toSend = getJSONRes(req, resInfo)
    res.status(toSend.status).send(toSend)
}