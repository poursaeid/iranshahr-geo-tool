/**
 * Custom express type to pass local data to the request object
 */

interface ICities {
    // [key: string]: string | number | Array
    en: string
    fa: string
    ckb: string
    ar: string
    latitude: number
    longitude: number
    elevation: number
}
interface ILocals {
    cities: Array<ICities>
}

declare namespace Express {
    interface Request {
        locals: ILocals
    }
}