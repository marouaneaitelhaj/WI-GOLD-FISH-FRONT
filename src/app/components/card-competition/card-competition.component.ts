import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-card-competition',
  templateUrl: './card-competition.component.html',
  styleUrls: ['./card-competition.component.css']
})
export class CardCompetitionComponent {
    @Input() competition: Competition = {} as Competition;
    ngOnInit(): void {
      this.competition.date = new Date(this.competition.date);
      this.competition.startTime = new Date(this.competition.startTime);
      this.competition.endTime = new Date(this.competition.endTime);
    }
}
