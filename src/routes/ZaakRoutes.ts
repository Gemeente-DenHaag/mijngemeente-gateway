import express, { Router } from "express";
import { VerifyToken } from "../middleware/JWTAuthMiddleware";
import { ZakenController } from "../controllers/ZakenController";

export const ZaakRouter: Router = express.Router()
    .use(VerifyToken)
    .get("/", ZakenController)
    .get("/statussen", (req, res) => {
        console.log("hello from /statussen");
        res.send(
            "test"
        )
    });
