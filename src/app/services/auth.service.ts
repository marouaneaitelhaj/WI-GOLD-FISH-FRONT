import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TUser } from '../model/TUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:8080/api/v1/auth';
  public autehnticatedUser = new BehaviorSubject<TUser>({} as TUser);
  public login(username: string, password: string) {
    return this.http.post<string>(this.url + '/login', { username, password }).subscribe(
      (token: any) => {
        localStorage.setItem('token', token.token);
      }
    );
  }
  public getUserByToken() {
    return this.http.get<TUser>(this.url + '/user').subscribe(
      (user: TUser) => {
        this.autehnticatedUser.next(user);
      }
    )
  }
  public logout() {
    return this.http.post(this.url + '/logout', {});
  }
  public register(username: string, password: string) {
    return this.http.post(this.url + '/signup', { username, password }).subscribe(
      (data:any) => {
        localStorage.setItem('token', data.token);
      }
    );
  }
}
