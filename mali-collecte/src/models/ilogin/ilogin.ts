export interface ILogin {
  // Mets ici les propriétés de l'objet à passer en paramètres à la fonction login du service authentication
  "username": string,
  "password" : string,

}

export interface ILoginRetrieve {
  // Mets ici les propriétés de la réponse que tu envoies après le login

    "username":string,
    "email": string,
    "roles":string,
    "tokenType":string,
    "accessToken":string

}
