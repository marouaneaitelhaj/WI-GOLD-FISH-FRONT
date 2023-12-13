import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Member from '../model/Member';
import { MyResponse } from '../model/MyResponse';
import { PopUpService } from '../components/pop-up-message/popUpService';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient, private alertService: PopUpService) {
    this.findAll();
  }
  public url = 'http://localhost:8080/member';
  public members = new BehaviorSubject<Member[]>([]);
  public pagination = new BehaviorSubject<MyResponse<Member>>({} as MyResponse<Member>);
  public findAll(size = 10, page = 0): void {
    this.http.get<Member[]>(this.url + '?page=' + page + '&size=' + size).subscribe(
      (response) => {
        console.log(response);
        this.members.next(response);
      }
    );
  }
  public save(member: Member): void {
    this.http.post<MyResponse<Member>>(this.url, member).subscribe(
      (response) => {
        this.members.next(this.members.getValue().concat(response.data));
        this.alertService.showMsg('Member saved successfully');
      },
      (error) => {
        this.alertService.showMsg(error.error.message);
      }
    );
  }
}
