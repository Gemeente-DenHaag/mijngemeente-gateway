import express, { Router } from "express";
import { OpenZaakMiddleWare } from "../middleware/OpenZaakMiddleWare";
import { ZakenController } from "../controllers/ZakenController";
import { StatussenController } from "../controllers/StatussenController";

export const ZaakRouter: Router = express.Router()
    .use(OpenZaakMiddleWare)
    .get("/zaken", ZakenController)
    .get("/statussen", StatussenController);
