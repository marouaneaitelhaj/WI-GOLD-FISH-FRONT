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
  public authenticatedUser = new BehaviorSubject<TUser>({} as TUser);
  public login(username: string, password: string) {
    return this.http.post<string>(this.url + '/login', { username, password }).subscribe(
      (token: any) => {
        localStorage.setItem('token', token.token);
      }
    );
  }
  getUserByToken() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  
    return this.http.post<TUser>(this.url + '/user', {}, { headers: headers }).subscribe(
      (user: TUser) => {
        this.authenticatedUser.next(user);
      },
      (error) => {
        if (error.status === 403 || error.status === 401) {
          localStorage.removeItem('token');
        }
      }
    );
  }
  
  public logout() {
    localStorage.removeItem('token');
    this.authenticatedUser.next({} as TUser);
  }
  public register(username: string, password: string) {
    return this.http.post(this.url + '/signup', { username, password }).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.getUserByToken();
      }
    );
  }
}
