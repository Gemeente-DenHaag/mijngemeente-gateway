import {ITokenAuthenticator} from "./ITokenAuthenticator";
import {UserDetails} from "./UserDetails";
import {JWTGenerator} from "./tokens/JWTGenerator";

export class MockAuthenticator implements ITokenAuthenticator {

    GenerateToken(userDetails: UserDetails): string {
        return JWTGenerator.Generate(userDetails, "ExampleSecret");
    }
}