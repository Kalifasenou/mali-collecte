import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const COLLECAPI="http://localhost:8080/api/enquete/"

@Injectable({
  providedIn: 'root'
})
export class EnquetesService {

  //permet de recuperer les informations d'yne enquête
  VoirDescriptionEnquete(idEnquete:any): Observable<any> {
    return this.http.get(COLLECAPI + `afficher/${idEnquete}`);
  }

  voirToutEnquete():Observable<any> {
    return this.http.get(COLLECAPI + `toutafficher`)
  }


CREERENQUETE(type:any,libelle:any,description:any,images:File,datedebut:any,datefin:any){
  const data= new FormData()
  data.append("type",type)
  data.append("libelle",libelle)
  data.append("description",description)
  data.append("images",images)
  data.append("datedebut",datedebut)
  data.append("datefin",datefin)
  return this.http.post(COLLECAPI + `creer`,data)
}






  constructor(private http: HttpClient) { }
  }


