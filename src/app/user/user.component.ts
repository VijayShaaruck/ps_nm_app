import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,private http:Http) { }

  ngOnInit() {
  }
go=function(){
          const body={name:this.name,mac:this.mac};
          this.http
          .post('http://localhost:8000/add', body)
          .subscribe();
          //this.router.navigate(['./admin']);
  }
}
