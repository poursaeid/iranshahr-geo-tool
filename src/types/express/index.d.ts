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
    cities: Array<ICities>
    districts: Array<IRegions>
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

/* Provinces type */
interface IRegions {
    [key: string]: string | number | object
    lat:number
    long:number
}