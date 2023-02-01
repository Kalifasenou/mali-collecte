import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.page.html',
  styleUrls: ['./sondage.page.scss'],
})
export class SondagePage implements OnInit {

  title = 'Les Sondages public ou ceux auxquelles vous avez été assignées';
  activityImage = '../../../assets/Logo-.png';
  activityName = '';
  begunDate = '';
  // endDate = '';
  organization = '';

  showRejectButton = true;
  showViewMoreButton = true;
  showAcceptButton = true;

  reject() {
    console.log('Refuser button clicked');
  }

  // viewMore() {
  //   console.log('Voir+ button clicked');
  // }

  accept() {
    console.log('Accepter button clicked');
  }

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

}
