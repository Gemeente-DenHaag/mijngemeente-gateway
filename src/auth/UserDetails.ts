export class UserDetails {
    identifier: string;
    role: UserRole;

    constructor(identifier: string, role: UserRole) {
        this.identifier = identifier;
        this.role = role;
    }
}

export enum UserRole {
    NaturalPerson = "natuurlijke_persoon",
    NonNaturalPerson = "niet_natuurlijke_persoon"
}