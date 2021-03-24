import { RequestHandler, Request, Response } from "express";

import got from "got";
import { JWT } from "../auth/JWT";

interface Query {
  bsn?: string;
}

export const ZakenController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const openZaakUrl = <string>process.env.OPEN_ZAAK_URL;
  const query = req.query as Query;

  try {
    const token = req.get('Authorization');
    if (token === undefined || token === null) {
      res.status(401).send();
      return;
    }
    
    const headers = CreateHeaders(token);
    let searchParams = {};

    if (query.bsn !== undefined) {
      searchParams = { rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn: query.bsn };
    }

    const response = await got(openZaakUrl + "/zaken", { headers, searchParams });
    // pass on the response immediately
    res.send(JSON.parse(response.body));

  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

function CreateHeaders(token: JWT) {
  return {
    Authorization: token,
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Crs": "EPSG:4326",
    "Content-Crs": "EPSG:4326",
  }
}