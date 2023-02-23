import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperer-questions-popup',
  template: `
    <div *ngFor="let question of questions">
      {{ question }}
    </div>
  `
})
export class QuestionsListComponent implements OnInit {
  questions: string[] = [];

  ngOnInit() {
    // Récupérez les questions à partir de l'API ou de tout autre source de données.
    this.questions = [];
  }
}
