import jwt from 'jsonwebtoken';
import { JWT } from "../JWT";

export class JWTGenerator {

  /**
   * Generates a JsonWebToken using the provided payload and secret.
   * @param {object} payload - the payload for the
   * @param secret
   * @param encrypt
   */
  static Generate(payload: object, secret: string): JWT {
    return jwt.sign(JSON.stringify(payload), secret);
  }
}
