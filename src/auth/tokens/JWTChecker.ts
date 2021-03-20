import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { JWT } from "../JWT";

export class JWTChecker {
    static Check(token: JWT, secret: string): boolean
    {
      let status = false;
      try {
          jwt.verify(token, secret);
          status = true;
      }
      catch (e) {
        console.error(e);
      }
      return status;
    }
}
