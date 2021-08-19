import { Logement } from "./logement";
import { Utilisateur } from "./utilisateur";

export interface Locataire extends Utilisateur{
    nom: string;
    prenom:string;
    sexe: string;
    nbPersonnes: number;
    dateSortie: string;
    dateEntree: string;
    adresse: string;
    codePostal: number;
    ville: string;
    pays: string;
    telephone: number;
    profession: string;
    logement: Logement;
}