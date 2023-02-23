import { EnquetesService } from './../../services/enquetes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.page.html',
  styleUrls: ['./enquete.page.scss'],
})
export class EnquetePage implements OnInit {

  @ViewChild('popover') popover: { event: Event; };
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  ToutEnquete:any;

AfficherTout(){
  this.enquetesService.voirToutEnquete().subscribe(data =>{
    this.ToutEnquete=data;
    console.log(this.ToutEnquete);
  });
}




  // activityName: string = "Activity 1";
  // organization: string = "Organization A";
  // begunDate: string = "01/01/2022";
  // endDate: string = "01/31/2022";


  constructor(public popoverController: PopoverController, private enquetesService:EnquetesService,) { }

  ngOnInit() {
    this.AfficherTout();
  }

  title = 'Les enquêtes public ou ceux auxquelles vous avez été assignées';
  activityImage = '../../../assets/Logo-.png';
  activityName = '';
  begunDate = '';
  endDate = '';
  organization = '';

  showRejectButton = true;
  showViewMoreButton = true;
  showAcceptButton = true;

  reject() {
    console.log('Refuser button clicked');
  }

  viewMore() {
    console.log('Voir+ button clicked');
  }

  accept() {
    console.log('Accepter button clicked');
  }

//   async openPopup(type: string) {
//     let popover;
//     if (type === 'reject') {
//       popover = await this.popoverController.create({
//         component: RejectPopover,
//         translucent: true
//       });
//     } else if (type === 'view') {
//       popover = await this.popoverController.create({
//         component: ViewPopover,
//         translucent: true
//       });
//     } else if (type === 'accept') {
//       popover = await this.popoverController.create({
//         component: AcceptPopover,
//         translucent: true
//       });
//     }

//     return await popover.present();
//   }
}

