import express, {Router} from "express";

export const baseRouter: Router = express.Router()
    .get('/ping', (req, res) => {
        res.send('Up and running!');
    });