import jwt from 'jsonwebtoken';
import { JWT } from "../JWT";

export class JWTGenerator {
  /**
   * Generates a JsonWebToken using the provided payload and secret.
   * @param payload
   * @param secret
   */
  static Generate(payload: any, secret: string): JWT {
    return jwt.sign(JSON.stringify(payload), secret);
  }
}
