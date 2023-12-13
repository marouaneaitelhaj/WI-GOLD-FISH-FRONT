import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-card-competition',
  templateUrl: './card-competition.component.html',
  styleUrls: ['./card-competition.component.css'],
})
export class CardCompetitionComponent {
    @Input() competition: Competition = {} as Competition;
    showDetails: boolean = false;
    openAddMember: boolean = false;
    ngOnInit(): void {
      this.competition.date = new Date(this.competition.date);
    }
}
