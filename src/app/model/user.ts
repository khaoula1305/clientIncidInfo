export class User {
  id: bigint;
    nom: string ;
    email: string ;
    password: string ;
    typeCompte: string ; // Administrateur, Helpdesk, Manager, Technicien , Collaborateur.
    division: string;  // Dans quel division travail
    fonction: string;  // la position du technicien
}
