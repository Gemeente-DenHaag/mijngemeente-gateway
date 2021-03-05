import express, {Router} from "express";
import {MockAuthenticator} from "../auth/MockAuthenticator";
import {UserRole} from "../auth/UserDetails";

export const authRouter: Router = express.Router()
    .get('/mock', (req, res) => {
        res.send(
            new MockAuthenticator().GenerateToken({
                    identifier: "661846",
                    role: UserRole.Citizen
                }
            ));
    });