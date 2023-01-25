import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupPageModule } from "./../../../../../mali-collecte/src/app/autrepage/popup/popup.module";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  nom: string = "Lelouch";

  modelData: any;
  constructor(public modalController: ModalController) {}
  async openIonModal() {
    const modal = await this.modalController.create({
      component: PopupPageModule,
      componentProps: {
        'model_title': "Nomadic model's reveberation"
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }
  ngOnInit() {}     

}
