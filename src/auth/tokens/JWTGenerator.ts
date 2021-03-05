import jwt from "jsonwebtoken";

export class JWTGenerator {

    /**
     * Generates a JsonWebToken using the provided payload and secret.
     * @param payload
     * @constructor
     */
    static Generate(payload: any, secret: string): string {
        payload.iat = Date.now();
        return jwt.sign(JSON.stringify(payload), secret);
    }
}