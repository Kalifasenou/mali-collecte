import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const COLLECAPI="http://localhost:8080/api/questionnaire/"

const COLLECAPI2="http://localhost:8080/api/questions/"

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {

  //permet de recuperer les previsions d'un cultive donnée
  VoirDescriptionQuestionnaire(idEnquete:any): Observable<any> {
    return this.http.get(COLLECAPI + `afficher/${idEnquete}`);
  }

  voirToutQuestionnaire():Observable<any> {
    return this.http.get(COLLECAPI + `toutafficher`)
  }


CREERQuestionnaire(libellequestionnaire:any, idEnquete:any){
  const data={
    "libellequestionnaire":libellequestionnaire
  }
  return this.http.post(COLLECAPI + `ajouterquestionnaire/${idEnquete}`,data)
}

supprimerQuestionnaire(idEnquete:any){
  return this.http.delete(COLLECAPI + `supprimer/${idEnquete}`)
}

modifierQuestionnaire(idEnquete:any){
  const data = new FormData()
  data.get(idEnquete)
  return this.http.put(COLLECAPI + `modifier/${idEnquete}`, data)
}

AfficherQuestionnaireparIdEnquete(idEnquete : any) {
  return this.http.get(COLLECAPI + `afficherquestionnaire/${idEnquete}`)
 }






  constructor(private http: HttpClient) { }



  addQuestionsToQuestionnaire(questions: any[], questionnaireId: any): Observable<any> {
    const data = {
      questions: questions
    };
    return this.http.put(COLLECAPI + `ajouterquestion/${questionnaireId}`, data);
  }

  getQuestionsByQuestionnaireId(idquestionnaire: any): Observable<any> {
    return this.http.get(COLLECAPI2 + `byquestionnaire/${idquestionnaire}`)

  }


  }


