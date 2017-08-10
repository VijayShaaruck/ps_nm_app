import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as io from "socket.io-client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  socket = io('http://localhost:8000');
  constructor(private http:Http) { }
  results=[];
  isNull=[];
  load=function(){
    this.http.get('http://localhost:8000/load').subscribe(data => {
      // Read the result field from the JSON response.
      var rows=JSON.parse(data["_body"])
      for(var i=0;i<rows.length;i++){
        if(rows[i].ip==null){
          console.log(rows[i].name)
          this.isNull[i]=1;
          this.results[i]='Name: '+rows[i].name+' MAC: '+rows[i].mac;
        }else{
          this.isNull[i]=0;
        }
      }
    });
  }
  ngOnInit() {
    this.socket.on('address', function (data) {
      console.log(data);
      this.load();
    }.bind(this));
    console.log("dbfbdjfd")
    this.load();
  }
  
  newItem = "";
  
  pushItem = function(){
    if(this.newItem !=""){
      this.results.push("Name:"+this.newItem+" MAC:"+this.newItem1+" IP:"+this.newItem2);
      this.newItem="";
      this.isNull[this.isNull.length]=0;      
    }
  }
  removeItem=function(index){
    this.results.splice(index,1);
  }
}
