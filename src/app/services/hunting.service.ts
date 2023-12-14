import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Hunting from '../model/Hunting';
import { MyResponse } from '../model/MyResponse';
import { AlertService } from '../components/alerts/alert-service.service';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  constructor(private http: HttpClient, private alertService: AlertService) {
    this.findAll();
  }
  public url = 'http://localhost:8080/hunting';
  public huntings = new BehaviorSubject<Hunting[]>([]);
  public pagination = new BehaviorSubject<MyResponse<Hunting>>({} as MyResponse<Hunting>);
  public findAll(): void {
    this.http.get<Hunting[]>(this.url).subscribe(
      (response) => {
        this.huntings.next(response);
      }
    );
  }
  public save(hunting: Hunting): void {
    this.http.post<MyResponse<Hunting>>(this.url, hunting).subscribe(
      (response) => {
        this.huntings.next(this.huntings.getValue().concat(response.data));
        this.alertService.showMsg('Hunting saved successfully');
      },
      (error) => {
        this.alertService.showMsg(error.error.message);
      }
    );
  }
}
