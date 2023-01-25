import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.page.html',
  styleUrls: ['./sondage.page.scss'],
})
export class SondagePage implements OnInit {

  activityName: string = "Activity 1";
  organization: string = "Organization A";
  begunDate: string = "01/01/2022";
  endDate: string = "01/31/2022";

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

}
