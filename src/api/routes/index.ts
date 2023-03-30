import { Router } from "express";
import { mainApiController } from "../controllers";

const router = Router()

/* Base path : /api */
router.get('/', mainApiController)
router.use('/cities', require('./cities-routes'))

export default router