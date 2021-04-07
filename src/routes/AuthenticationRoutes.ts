import express, { Router } from "express";
import { MockTokenAuthenticator } from "../auth/MockTokenAuthenticator";

export const AuthRouter: Router = express.Router()
  .get("/mock", (req, res) => {
    res.send(
      {
        token: new MockTokenAuthenticator().GenerateToken()
      });
  });
