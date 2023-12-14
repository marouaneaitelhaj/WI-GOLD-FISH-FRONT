import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-hunting-details',
  templateUrl: './hunting-details.component.html',
  styleUrls: ['./hunting-details.component.css']
})
export class HuntingDetailsComponent {
  @Input() competition: Competition = {} as Competition;
}
