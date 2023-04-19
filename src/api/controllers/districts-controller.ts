import { RequestHandler } from "express";
import { IHTTPRes, getJSONRes } from "../../types";
import { HTTPMessages } from "../../configs/consts";

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

export const getCitiesByProvince: RequestHandler = (req, res, next) => {
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
            resParams = { success: true, status: 200, data: districts[key] }
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