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
  ip=[];
  isNull=[];
  names=[];
  load=function(){
    this.http.get('http://localhost:8000/load').subscribe(data => {
      // Read the result field from the JSON response.
      var rows=JSON.parse(data["_body"])
      for(var i=0;i<rows.length;i++){
        this.names[i]=rows[i].name
        if(rows[i].ip==null){
          console.log(rows[i].name)
          this.isNull[i]=1;
          this.results[i]='Name: '+rows[i].name+' MAC: '+rows[i].mac;
        }else{
          this.isNull[i]=0;
           this.results[i]='Name: '+rows[i].name+' MAC: '+rows[i].mac;
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
      this.isNull[this.isNull.length]=0;  
       const body={name:this.newItem,mac:this.newItem1,ip:this.newItem2};
          this.http
          .post('http://localhost:8000/admin/add', body)
          .subscribe();
             
    }
  }
  addIP=function(index){
    this.results[index]+=" IP:"+this.ip[index];
    this.isNull[index]=0;
     const body={name:this.names[index],ip:this.ip[index]};
          this.http
          .post('http://localhost:8000/update', body)
          .subscribe();
  }
  removeItem=function(index){
    this.results.splice(index,1);
     const body={name:this.names[index]};
          this.http
          .post('http://localhost:8000/admin/delete', body)
          .subscribe();
  }
}
