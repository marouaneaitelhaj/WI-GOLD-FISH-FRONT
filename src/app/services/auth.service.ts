import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TUser } from '../model/TUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.getUserByToken(); 
  }

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
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<TUser>(this.url + '/user', { headers }).subscribe(
      (user: TUser) => {
        this.autehnticatedUser.next(user);
      },
      (error) => {
          console.log(error.status);
          if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('token');
          }
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
