import { RequestHandler, Request, Response } from "express";
import { CreateHeaders } from "../utils/CreateHeader";
import { JWT } from "../auth/JWT";
import got from "got";


interface Query {
    zaak?: string;
}

export const StatussenController: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const openZaakURL = <string>process.env.OPEN_ZAAK_URL;
    const token: JWT | undefined = req.headers.authorization;
    const query: Query | undefined = req.query;

    if (token === undefined) {
        res.status(401).send();
        return;
    }
    const headers = CreateHeaders(token);

    let url: string;

    if (query.zaak !== undefined) {
        url = `${openZaakURL}/statussen?zaak=${query.zaak}`;
    }
    else {
        url = `${openZaakURL}/statussen`
    }

    const options = {
        headers: headers
    };

    try {
        const response = await got(url, options);
        res.type('json');
        res.send(response.body);
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
}