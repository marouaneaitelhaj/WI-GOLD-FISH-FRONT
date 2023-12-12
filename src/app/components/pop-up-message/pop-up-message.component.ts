import { Component, EventEmitter, Output } from '@angular/core';
import AlertProps from './AlertProps';
import { PopUpService } from './popUpService';

@Component({
  selector: 'app-pop-up-message',
  templateUrl: './pop-up-message.component.html',
  styleUrls: ['./pop-up-message.component.css']
})
export class PopUpMessageComponent {
  @Output() confirmed = new EventEmitter<boolean>();
  alertProps: AlertProps = new AlertProps();
  constructor(private alertService : PopUpService) { }
  close() {
    this.alertService.hide();
  }
  ngAfterContentInit() {
    this.alertService.alertprops.subscribe(
      (alertprops) => {
        this.alertProps = alertprops;
        console.log(this.alertProps);
      }
    );
  }
}
