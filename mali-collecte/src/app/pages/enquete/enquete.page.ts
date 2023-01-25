import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.page.html',
  styleUrls: ['./enquete.page.scss'],
})
export class EnquetePage implements OnInit {

  activityName: string = "Activity 1";
  organization: string = "Organization A";
  begunDate: string = "01/01/2022";
  endDate: string = "01/31/2022";

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
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

