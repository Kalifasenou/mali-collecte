import { EnquetesService } from './../../services/enquetes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AccueilPage } from "../accueil/accueil.page";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creer-enquete',
  templateUrl: './creer-enquete.page.html',
  styleUrls: ['./creer-enquete.page.scss'],
})
export class CreerEnquetePage implements OnInit {

  form:any={
    type:'enquête',
  libelle: null,
  description: null,
}
 datedebut: any
  datefin:any
  image:any
  ajout: Object

  constructor(
    private enquetesService:EnquetesService
  ) {}



  back(): void {
    window.history.back()
  }

  chargerImages(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }


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
}
