import { RequestHandler, Request, Response } from "express";

import got from "got";
import { CreateHeaders } from "../utils/CreateHeader";

interface Query {
  bsn?: string;
}

export const ZakenController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const openZaakUrl = <string>process.env.OPEN_ZAAK_URL;
  const query = req.query as Query;

  const token = req.get("Authorization");
  if (token === undefined || token === null) {
    res.status(401).send();
    return;
  }

  const headers = CreateHeaders(token);
  let searchParams = {};

  if (query.bsn !== undefined) {
    searchParams = {
      rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn: query.bsn,
    };
  }

  try {
    const response = await got(openZaakUrl + "/zaken", {
      headers,
      searchParams,
    });
    // pass on the response immediately
    res.send(JSON.parse(response.body));
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};
