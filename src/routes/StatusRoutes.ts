import express, { Router } from "express";
import { VerifyToken } from "../middleware/JWTAuthMiddleware";
import { StatussenController } from "../controllers/StatussenController";


export const StatussenRouter: Router = express.Router()
    .use(VerifyToken)
    .get("/", StatussenController)
