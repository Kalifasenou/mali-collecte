import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EnquetesService } from 'src/app/services/enquetes.service';

@Component({
  selector: 'app-creersondage',
  templateUrl: './creersondage.page.html',
  styleUrls: ['./creersondage.page.scss'],
})
export class CreersondagePage implements OnInit {

  form:any={
    type:'sondage',
  libelle: null,
  description: null,
}
 datedebut:any;
 datefin:any;
  image:any;
  ajout: Object;

  constructor(
    private enquetesService:EnquetesService
  ) {}


  ngOnInit() {
  }
  

  ajoutEnquete(){
    this.enquetesService.CREERENQUETE(
      this.form.type,
      this.form.libelle,
      this.form.description,
      this.image,
      this.datedebut,
      this.datefin).subscribe(data=>{
        console.log(data);
        this.ajout=data
      })
  }


  back(): void {
    window.history.back()
  }

  chargerImages(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }


}
