import express, {Router} from "express";

export const BaseRouter: Router = express.Router()
    .get('/ping', (req, res) => {
        res.send('Up and running!');
    });
