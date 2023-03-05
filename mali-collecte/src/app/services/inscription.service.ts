import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const COLLECAPI="http://localhost:8080/api/auth"


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {


  constructor(private html: HttpClient) { }


  //Creation d'un compte
  CreerUser(utilisateur:any): Observable<any> {
    return this.html.post(COLLECAPI + `/signup`, utilisateur);
  }
}
