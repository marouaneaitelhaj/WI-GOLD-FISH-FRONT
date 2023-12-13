import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Ranking from '../model/Ranking';
import { MyResponse } from '../model/MyResponse';
import { PopUpService } from '../components/pop-up-message/popUpService';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor(private http: HttpClient, private alertService: PopUpService) {
    this.findAll();
  }
  public url = 'http://localhost:8080/ranking';
  public rankings = new BehaviorSubject<Ranking[]>([]);
  public pagination = new BehaviorSubject<MyResponse<Ranking>>({} as MyResponse<Ranking>);
  public findAll(size = 10, page = 0): void {
    this.http.get<Ranking[]>(this.url + '?page=' + page + '&size=' + size).subscribe(
      (response) => {
        console.log(response);
        this.rankings.next(response);
      }
    );
  }
  public save(ranking: Ranking): void {
    this.http.post<MyResponse<Ranking>>(this.url, ranking).subscribe(
      (response) => {
        this.rankings.next(this.rankings.getValue().concat(response.data));
        this.alertService.showMsg('Ranking saved successfully');
      },
      (error) => {
        this.alertService.showMsg(error.error.message);
      }
    );
  }
}
