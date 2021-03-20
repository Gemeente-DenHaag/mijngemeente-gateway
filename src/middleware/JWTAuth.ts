import { exception } from "console";
import { JWT } from "../auth/JWT";
import { JWTChecker } from "../auth/tokens/JWTChecker";

export function Check(req: any, res: any, next: any) {
  const openZaakSecret = <string>process.env.OPEN_ZAAK_SECRET;

  let jwt: string | null = req.get("Authorization");
  
    if (jwt !== null && jwt !== undefined) { 
      jwt = jwt.split(" ")[1];
      if (JWTChecker.Check(jwt, openZaakSecret)) {
        next();
        return;
      }
    }
    res.status(401).send('Unauthorized');
}
