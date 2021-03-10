import { JWT } from "./JWT";

export interface ITokenAuthenticator {
    GenerateToken: () => JWT;
}