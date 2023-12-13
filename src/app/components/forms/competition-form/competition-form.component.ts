import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Competition from 'src/app/model/Competition';
import { CompetitionService } from 'src/app/services/competition.service';
import AlertProps from '../../alerts/AlertProps';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css']
})
export class CompetitionFormComponent {
  competitionForm: FormGroup;
  @Input() competition: Competition = {} as Competition;
  constructor(private fb: FormBuilder, private competitionService: CompetitionService) {
    this.competitionForm = this.fb.group({
      date: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      numberOfParticipants: [null, Validators.required],
      location: [null, Validators.required],
      amount: [null, Validators.required],
    }, {
      validators: [this.timeRangeValidator]
    });
  }

  timeRangeValidator(competitionForm: FormGroup) {
    const startTime = competitionForm.get('startTime')?.value;
    const endTime = competitionForm.get('endTime')?.value;

    if (startTime && endTime && startTime >= endTime) {
      competitionForm.get('endTime')?.setErrors({ timeRange: true });
    } else {
      competitionForm.get('endTime')?.setErrors(null);
    }
  }


  onSubmit() {
    if (this.competitionForm.valid) {
      const competition = this.competitionForm.value as Competition;
      const date = new Date(competition.date);
      const year = date.getFullYear();
      const month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      const code = competition.location.toLowerCase().replace(' ', '').substring(0, 3) + '-' + day + '-' + month + '-' + year.toString().substring(2);
      competition.code = code;
      this.competitionService.save(competition)
      this.competitionForm.reset();
      this.visible = false;
    }
  }
  @Input() visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  alertProps : AlertProps = new AlertProps();
}
