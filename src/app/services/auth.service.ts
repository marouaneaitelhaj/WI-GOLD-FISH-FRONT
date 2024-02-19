import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:8080/api/v1/auth';
  public login(username: string, password: string) {
    return this.http.post(this.url + '/login', {username, password});
  }
  public logout() {
    return this.http.post(this.url + '/logout', {});
  }
  public register(username: string, password: string) {
    return this.http.post(this.url + '/signup', {username, password});
  }
}
