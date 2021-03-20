import express, { Router } from "express";
import { Check } from "../middleware/JWTAuth";
import { zakenHandler } from "./ZakenHandler";

export const ZaakRouter: Router = express.Router()
    .use(Check)
    .get("/", zakenHandler)
    .get("/statussen", (req, res) => {
        console.log("hello from /statussen");
        res.send(
            "test"
        )
    });