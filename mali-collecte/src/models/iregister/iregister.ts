export interface IRegister {
  // Mets ici les propriétés de l'objet à passer en paramètres à la fonction register du service authentication

    "nom":string,
    "prenom":string,
    "username":string,
    "genre":string,
    "numero":string,
    "email":string,
    "password":string,
    "localite":string,
    "organisation":string
}

export interface IRegisterRetrieve {
  // Mets ici les propriétés de la réponse que tu envoies après le register
  "id":string,
  "nom":string,
  "prenom":string,
  "username":string,
  "genre":string,
  "numero":string,
  "email":string,
  "password":string,
  "localite":string,
  "organisation":string,
  "token_bearer":string
  "token":string
}
