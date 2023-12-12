import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Competition from '../model/Competition';
import { MyResponse } from '../model/MyResponse';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  constructor(private http: HttpClient) {
    this.findAll();
  }
  public url = 'http://localhost:8080/competition';
  public competitions = new BehaviorSubject<Competition[]>([]);
  public findAll(): void {
    this.http.get<MyResponse<Competition>>(this.url).subscribe(
      (response) => {
        this.competitions.next(response.content);
      }
    );
  }
  public save(competition: Competition): void {
    this.http.post(this.url, competition).subscribe((data: any) => {
      this.findAll();
    });
  }
}
