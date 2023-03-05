import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

const COLLECAPI="http://localhost:8080/api/questionnaire/"

const COLLECAPI2="http://localhost:8080/api/questions/"

const REPONDRE="http://localhost:8080/api/reponse/"

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {

  //permet de recuperer les previsions d'un cultive donnée
  VoirDescriptionQuestionnaire(idEnquete:any): Observable<any> {
    return this.http.get(COLLECAPI + `afficher/${idEnquete}`);
  }

  voirToutQuestionnaire():Observable<any> {
    return this.http.get(COLLECAPI + `toutafficher`);
  }


CREERQuestionnaire(libellequestionnaire:any, idEnquete:any){
  const data={
    "libellequestionnaire":libellequestionnaire
  }
  return this.http.post(COLLECAPI + `ajouterquestionnaire/${idEnquete}`,data);
}

supprimerQuestionnaire(idEnquete:any){
  return this.http.delete(COLLECAPI + `supprimer/${idEnquete}`);
}

modifierQuestionnaire(idEnquete:any){
  const data = new FormData()
  data.get(idEnquete)
  return this.http.put(COLLECAPI + `modifier/${idEnquete}`, data);
}

AfficherQuestionnaireparIdEnquete(idEnquete : any) {
  return this.http.get(COLLECAPI + `afficherquestionnaire/${idEnquete}`);
 }






  constructor(private http: HttpClient) { }



  // addQuestionsToQuestionnaire(questions: any[], questionnaireId: any): Observable<any> {
  //   const data = {
  //     questions: questions
  //   };
  //   return this.http.post(COLLECAPI + `ajoutquestion/${questionnaireId}`, data);
  // }


  addQuestionsToQuestionnaire(intitule:any,type:any, questionnaireId: any): Observable<any> {

    const data={
      "intitule":intitule,
      "type":type
    }

      return this.http.post(COLLECAPI + `ajoutquestion/${questionnaireId}`, data);
    }



  getQuestionsByQuestionnaireId(idquestionnaire: any): Observable<any> {
    return this.http.get(COLLECAPI2 + `byquestionnaire/${idquestionnaire}`);

  }

  repondreaunequestion(user:any, question:any, reponse:any): Observable<any>{

    return this.http.post(REPONDRE + `ajouterunereponseaunequestion/${user}/${question}`, reponse)
  }


  //envoyer plusieur reponse en même temps
//   repondreauxquestion(user:any, question:any, responses:any[]): Observable<any> {
//   const requests: Observable<any>[] = [];
//   for (const response of responses) {
//     requests.push(this.http.post(REPONDRE + `ajouterunereponseaunequestion/${user}/${question}`, response));
//   }
//   return forkJoin(requests);
// }


  }


