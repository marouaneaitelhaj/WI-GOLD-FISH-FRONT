import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import AlertProps from './AlertProps';

@Injectable({
    providedIn: 'root'
})
export class PopUpService {
    public alertprops = new BehaviorSubject<AlertProps>(new AlertProps());
    public showMsg(msg: string) {
        this.alertprops.next(new AlertProps(true, msg));
    }
    public hide() {
        this.alertprops.next(new AlertProps());
    }
}
