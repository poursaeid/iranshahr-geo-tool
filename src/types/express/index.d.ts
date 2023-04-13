/**
 * Custom express type to pass local data to the request object
 */
declare namespace Express {
    interface Request {
        locals: ILocals
    }
}

/* Express request local object */
interface ILocals {
    cities: ArrayL<ICities | object>
    districts: Array<object>
}


/* Cities type */
interface ICities {
    [key: string]: string | number | Array
    en: string
    fa: string
    ckb: string
    ar: string
    latitude: number
    longitude: number
    elevation: number
}
