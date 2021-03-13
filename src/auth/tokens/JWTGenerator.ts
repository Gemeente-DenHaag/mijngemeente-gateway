import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { JWT } from "../JWT";

export class JWTGenerator {

  /**
   * Generates a JsonWebToken using the provided payload and secret. If the encrypt
   * @param {object} payload - the payload for the
   * @param {string} secret - the secret used to sign and encrypt the token
   * @param {boolean} [encrypt] - if true, the token is encrypted with the provided secret
   */
  static Generate(payload: Record<string, unknown>, secret: string, encrypt = false): JWT {
    const token: string = jwt.sign(JSON.stringify(payload), secret);
    return encrypt ? CryptoJS.AES.encrypt(token, secret).toString() : token;
  }
}
