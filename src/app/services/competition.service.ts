import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Competition from '../model/Competition';
import { MyResponse } from '../model/MyResponse';
import { PopUpService } from '../components/pop-up-message/popUpService';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  constructor(private http: HttpClient,private alertService: PopUpService) {
    this.findAll();
  }
  public url = 'http://localhost:8080/competition';
  public competitions = new BehaviorSubject<Competition[]>([]);
  public pagination = new BehaviorSubject<MyResponse<Competition>>({} as MyResponse<Competition>);
  public findAll(): void {
    this.http.get<MyResponse<Competition>>(this.url).subscribe(
      (response) => {
        this.competitions.next(response.content);
        this.pagination.next(response);
      }
    );
  }
  public save(competition: Competition): void {
    this.http.post<MyResponse<Competition>>(this.url, competition).subscribe(
      (response) => {
        this.competitions.next(this.competitions.getValue().concat(response.data));
        this.alertService.showMsg('Competition saved successfully');
      }
    );
  }
}
