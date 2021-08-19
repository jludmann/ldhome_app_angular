import { Role } from "./role";

export interface Utilisateur {
    id: number | undefined;
    mail: string;
    listeRole: string[];
}