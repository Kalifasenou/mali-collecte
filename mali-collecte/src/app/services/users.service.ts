import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const APILIEN= "http://localhost:8080/api/enquete/"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/api/enquete/';


  constructor(private http: HttpClient) { }


  assignerQuestionADesUers(questionnaireid: any, repondant: any): Observable<any> {
    return this.http.patch<any>(APILIEN + `assignerquestionadesusers/${questionnaireid}`, repondant);
  }


  voirToutUser():Observable<any> {
    return this.http.get(APILIEN + `afficher`)
  }
}
