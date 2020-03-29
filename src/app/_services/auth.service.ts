import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:8080/api/accounts/auth/';
constructor(private http:HttpClient ) { }
  login(model: any ){
    return this.http.post(this.baseUrl + 'login', model)
  }
}
