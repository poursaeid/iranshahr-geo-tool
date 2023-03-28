import { Router } from "express";
import { mainApiController } from "../controllers";

const router = Router()

/* Base path : /api */
router.use('/', mainApiController)


export default router