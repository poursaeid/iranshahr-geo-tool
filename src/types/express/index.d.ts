/**
 * Custom express type to pass local data to the request object
 */

interface ILocals {
    cities: object
}

declare namespace Express {
    interface Request {
        locals: ILocals
    }
}