import { JWT } from "../auth/JWT";
import { JWTChecker } from "../auth/tokens/JWTChecker";

export function OpenZaakMiddleWare(req: any, res: any, next: any) {
  const openZaakSecret = <string>process.env.OPEN_ZAAK_SECRET;

  let jwt: JWT | null = req.get("Authorization");
  
    if (jwt !== null && jwt !== undefined) { 
      jwt = jwt.split(" ")[1];
      if (JWTChecker.Verify(jwt, openZaakSecret)) {
        res.type('json');
        next();
        return;
      }
    }
    res.status(401).send('Unauthorized');
}
