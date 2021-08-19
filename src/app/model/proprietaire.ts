import { Utilisateur } from "./utilisateur";

export interface Proprietaire extends Utilisateur {
    nom: string;
    prenom:string;
    sexe: string;
    adresse: string;
    codePostal: string;
    ville: string;
    profession: string;
}