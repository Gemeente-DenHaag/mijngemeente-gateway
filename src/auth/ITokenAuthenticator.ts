import {UserDetails} from "./UserDetails";

export interface ITokenAuthenticator {
    GenerateToken: (userDetails: UserDetails) => string;
}