import { Charge } from "./charge";
import { Locataire } from "./locataire";
import { Piece } from "./piece";
import { Proprietaire } from "./proprietaire";

export interface Logement {
    id: number;
    typeLogement: string;
    typeLocation: string;
    occupe: boolean;
    surface: number;
    etage: number;
    nbPieces: number;
    adresse: string;
    codePostal: number;
    ville: string;
    quartier: string;
    loyer: number;
    locataire: Locataire;
    proprietaire: Proprietaire;
    sommeCharges: number;
    total: number;
    listePiece: Piece[];
    listeCharge: Charge[];
}