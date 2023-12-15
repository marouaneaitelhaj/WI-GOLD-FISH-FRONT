import { Component, Input } from '@angular/core';
import Competition from 'src/app/model/Competition';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
  @Input() competition: Competition = {} as Competition;
}
