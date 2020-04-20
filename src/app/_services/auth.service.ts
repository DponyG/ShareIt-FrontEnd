import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/shareit/api/account/';
  constructor(private http:HttpClient ) { }

  login(model: any ){
    return this.http.post(this.baseUrl + 'loginTest', model).pipe(
      map((response: any ) => {
        const user = response;
        if(user){
          localStorage.setItem('token', user.token);
        }
      })
    );
  }
}
