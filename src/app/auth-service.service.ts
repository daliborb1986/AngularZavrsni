import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/users'
  private isAuthenticated = false;

  register(user:any): Observable<any> {
    return this.http.post(this.url, user)
  }

  login(email:string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.url}?email=${email}&password=${password}`)
  }

  isLoggedIn():boolean{
    return this.isAuthenticated;
  }

  setAuthenticationStatus(status:boolean): void {
    this.isAuthenticated = status;
  }
}
