import { RequestHandler } from "express";
import { jsonReader } from "../utils";
import { CITIES_PATH } from "../../configs";
import { getJSONRes } from "../../types";

export const getAll: RequestHandler = (req, res, next) => {
    // Get cities data from the prev middleware if there isn't any error
    const toSend = getJSONRes(req, { success: true, status: 200, data: req.locals.cities })
    res.status(toSend.status).send(toSend)
        }
    })
}
