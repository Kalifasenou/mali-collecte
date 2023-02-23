import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  onClick: any;

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover: { event: Event; };
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
