import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Competition from 'src/app/model/Competition';
import Member from 'src/app/model/Member';

@Component({
  selector: 'app-hunting-details',
  templateUrl: './hunting-details.component.html',
  styleUrls: ['./hunting-details.component.css']
})
export class HuntingDetailsComponent  {
  @Input() competition : Competition = {} as Competition;
  @Input() member : Member = {} as Member;
  huntingform : boolean = false;
}