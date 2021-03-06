import jwt from 'jsonwebtoken';

export class JWTGenerator {
  /**
   * Generates a JsonWebToken using the provided payload and secret.
   * @param payload
   * @param secret
   * @constructor
   */
  static Generate(payload: any, secret: string): string {
    return jwt.sign(JSON.stringify(payload), secret);
  }
}
