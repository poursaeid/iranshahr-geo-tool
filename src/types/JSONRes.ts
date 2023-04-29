/**
 * Type module to use a same format for every api response
 *  https://jsonapi.org/
*/

import { Request } from "express"

export interface IHTTPRes {
    success: boolean
    status: number
    messsage?: string
    path?: string
    data?: Array<object> | object
}
/** Get req object and responce info to create a save format for every api */
export const getJSONRes = (req: Request, params: IHTTPRes): IHTTPRes => {
    const toReturn: IHTTPRes = { ...params, path: req.originalUrl }
    return toReturn
}