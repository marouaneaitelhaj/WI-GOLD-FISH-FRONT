import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';
import { PopUpMessageComponent } from '../alerts/pop-up-message/pop-up-message.component';
import { CompetitionService } from 'src/app/services/competition.service';
import { AlertService } from '../alerts/alert-service.service';
import Member from 'src/app/model/Member';

@Component({
  selector: 'app-card-competition',
  templateUrl: './card-competition.component.html',
  styleUrls: ['./card-competition.component.css'],
})
export class CardCompetitionComponent {
  @Input() competition: Competition = {} as Competition;
  member : Member = {} as Member;
  showDetails: boolean = false;
  showHunting: boolean = false;
  openAddMember: boolean = false;
  ngOnInit(): void {
    this.competition.date = new Date(this.competition.date);
  }
  constructor(private competitionService: CompetitionService, private alertService: AlertService) { }
  onOpenDeleteDialog(competition:Competition) {
    this.alertService.showConfirmation(
      'Are you sure you want to delete this competition ' + this.competition.code + '?',
      () => this.competitionService.delete(this.competition.code)
    );
  }
}
