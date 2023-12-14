import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Competition from 'src/app/model/Competition';
import Member from 'src/app/model/Member';
import { FishService } from 'src/app/services/fish.service';

@Component({
  selector: 'app-add-hunting-form',
  templateUrl: './add-hunting-form.component.html',
  styleUrls: ['./add-hunting-form.component.css']
})
export class AddHuntingFormComponent {
  @Input() visible: boolean = false;
  @Input() member : Member = {} as Member;
  @Input() competition : Competition = {} as Competition;
  huntingForm: FormGroup;
  constructor(private fb: FormBuilder, private fishService: FishService) {
    this.huntingForm = this.fb.group({
      numberOfFish: [null, Validators.required],
      fish: [null, Validators.required],
    });
  }
  onSubmit() {}
}
