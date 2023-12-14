import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent {
    @Input() competition : Competition = {} as Competition;
    @Input() openAddMember : boolean = false;
}
