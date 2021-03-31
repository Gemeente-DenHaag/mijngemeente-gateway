import express, { Router } from "express";
import { OpenZaakMiddleWare } from "../middleware/OpenZaakMiddleWare";
import { ZakenController } from "../controllers/ZakenController";

export const ZaakRouter: Router = express.Router()
    .use(OpenZaakMiddleWare)
    .get("/", ZakenController);
