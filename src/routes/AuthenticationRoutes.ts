import express, { Router } from "express";
import { MockTokenAuthenticator } from "../auth/MockTokenAuthenticator";

export const authRouter: Router = express.Router()
  .get("/mock", (req, res) => {
    res.send(
      new MockTokenAuthenticator().GenerateToken());
  });