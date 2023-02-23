import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage  {

  questionForm = new FormGroup({
    questions: new FormArray([])
    });

//     get questions() {
//     return this.questionForm.get('questions') as FormArray;
//     }

//     addQuestion() {
//     const question = new FormGroup({
//     questionText: new FormControl('', Validators.required),
//     questionType: new FormControl('text', Validators.required)
//     });
//     this.questions.push(question);
//     }

//     deleteQuestion(index: number) {
//     this.questions.removeAt(index);
//     }
//     }

















































 form!: FormGroup;
  question : any='';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      questionsArray: this.formBuilder.array([])
    }) ;
  }

  get questionsArray(): FormArray {
    return this.form.get('questionsArray') as FormArray;
  }

  addQuestion(): void{
    this.questionsArray.push(
      this.formBuilder.group({
        question: [''],
        type: [''],
        reponse: [''],
        options: this.formBuilder.array([])
      })
    );
  }



  get options(): FormArray {
    const question = this.questionsArray.at(this.questionsArray.length - 1);
    if (question.get('options') instanceof FormArray) {
      return question.get('options') as FormArray;
    } else {
      return this.formBuilder.array([]);
    }
  }

  addOption(question: FormGroup): void {
    this.options.push(this.formBuilder.control(''));
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  dismiss(): void {
    // Close the modal
  }
}
