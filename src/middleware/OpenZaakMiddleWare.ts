import { JWT } from "../auth/JWT";
import { JWTChecker } from "../auth/tokens/JWTChecker";
import {Request, Response, NextFunction} from "express";

export function OpenZaakMiddleWare(req: Request, res: Response, next: NextFunction): void {
  const openZaakSecret = <string>process.env.OPEN_ZAAK_SECRET;

  let jwt: JWT | undefined = req.get("Authorization");
  
    if (jwt) { 
      jwt = jwt.split(" ")[1];
      if (JWTChecker.Verify(jwt, openZaakSecret)) {
        res.type('json');
        next();
        return;
      }
    }
    res.status(401).send('Unauthorized');
}
