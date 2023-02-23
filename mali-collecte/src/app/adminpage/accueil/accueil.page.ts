import { Component, OnInit, ViewChild } from '@angular/core';
import { EnquetesService } from 'src/app/services/enquetes.service';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  nom: string = 'Lelouch';

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
  constructor(private enquetesService: EnquetesService) { }

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
  }

