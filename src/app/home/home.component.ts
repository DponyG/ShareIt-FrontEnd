import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle(){
    this.registerMode = true
  }

  getValues(){
    this.http.get('http://localhost:8080/shareit/api/account/1').subscribe(response => {
      this.values = response;
      console.log(this.values);
    }, error =>{
      console.log("there was an error");
    });
  }

  cancelRegisterMode(registerMode: boolean ){
    console.log(this.registerMode);
    this.registerMode = registerMode;
  }





}
