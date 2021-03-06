import { ITokenAuthenticator } from "./ITokenAuthenticator";
import { JWTGenerator } from "./tokens/JWTGenerator";

export class MockTokenAuthenticator implements ITokenAuthenticator {

  GenerateToken(): string {
    const clientId = <string>process.env.OPEN_ZAAK_CLIENT_ID;
    const openZaakSecret = <string>process.env.OPEN_ZAAK_SECRET;

    const tokenPayload = {
      client_id: clientId,
      iss: clientId,
      iat: this.getIAT(),
      user_id: "testUser",
      user_representation: "Test User"
    };

    return JWTGenerator.Generate(tokenPayload, openZaakSecret);
  }

  private getIAT = (): number => Math.floor(Date.now() / 1000);
}
