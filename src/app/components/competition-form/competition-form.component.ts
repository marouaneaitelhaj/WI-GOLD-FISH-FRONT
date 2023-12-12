import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css']
})
export class CompetitionFormComponent {
  @Input() competition: Competition = {} as Competition;
  constructor(private fb: FormBuilder) { }
  competitionForm = this.fb.group({
    code: [this.competition?.code, Validators.required],
    date: [this.competition?.date, Validators.required],
    startTime: [this.competition?.startTime, Validators.required],
    endTime: [this.competition?.endTime, Validators.required],
    numberOfParticipants: [this.competition?.numberOfParticipants, Validators.required],
    location: [this.competition?.location, Validators.required],
    amount: [this.competition?.amount, Validators.required],
  });
  onSubmit() {
    console.log(this.competitionForm.value);
  }
}
