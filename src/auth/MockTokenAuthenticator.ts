import { ITokenAuthenticator } from "./ITokenAuthenticator";
import { JWTGenerator } from "./tokens/JWTGenerator";
import { JWT } from "./JWT";

export class MockTokenAuthenticator implements ITokenAuthenticator {

  public GenerateToken(): JWT {
    const clientId = <string>process.env.OPEN_ZAAK_CLIENT_ID;
    const openZaakSecret = <string>process.env.OPEN_ZAAK_SECRET;

    const tokenPayload = {
      client_id: clientId,
      iss: clientId,
      iat: this.getCurrentTimeInSeconds(),
      user_id: "testUser",
      user_representation: "Test User"
    };

    return JWTGenerator.Generate(tokenPayload, openZaakSecret, true);
  }

  private getCurrentTimeInSeconds = (): number => Math.floor(Date.now() / 1000);
}
