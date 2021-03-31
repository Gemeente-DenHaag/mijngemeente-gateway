import express, { Router } from "express";
import { OpenZaakMiddleWare } from "../middleware/OpenZaakMiddleWare";
import { StatussenController } from "../controllers/StatussenController";

export const StatussenRouter: Router = express.Router()
    .use(OpenZaakMiddleWare)
    .get("/", StatussenController);
