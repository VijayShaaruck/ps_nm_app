import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  error=""
  constructor(private router:Router) { }

  ngOnInit() {
  }
  login=function(){
    if(this.username=='admin'&&this.password=='admin'){
        this.router.navigate(['admin'])
    }else{
        this.error="Invalid Credentials"
    }
  }
}
