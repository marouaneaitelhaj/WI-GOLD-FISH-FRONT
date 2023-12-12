import { Component } from '@angular/core';

import { CompetitionService } from '../../services/competition.service';
import Competition from 'src/app/model/Competition';
@Component({
  selector: 'app-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.css']
})
export class CompetitionPageComponent {
  constructor(public competitionService: CompetitionService) { }
  public competitions : Competition[] = [];
  ngAfterViewInit(): void {
    this.competitionService.competitions.subscribe((data) => {
      this.competitions = data;
    });
  }
}
