import express, { Router } from "express";
import { VerifyToken } from "../middleware/JWTAuthMiddleware";
import { ZakenController } from "../controllers/ZakenController";
import { ZaakStatusController } from "../controllers/ZaakStatusController";

export const ZaakRouter: Router = express.Router()
    .use(VerifyToken)
    .get("/", ZakenController)
    .get("/statussen", ZaakStatusController)
