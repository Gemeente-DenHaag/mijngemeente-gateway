import express, { Router } from "express";
import { VerifyToken } from "../middleware/JWTAuthMiddleware";

export const ZaakRouter: Router = express.Router()
    .use(Check)
    .get("/statussen", (req, res) => {
        console.log("hello from /statussen");
        res.send(
            "test"
        )
    });