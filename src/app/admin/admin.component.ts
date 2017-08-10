import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit() {
    
  }
  items=[];
  newItem = "";
  pushItem = function(){
    if(this.newItem !=""){
      this.items.push("Name:"+this.newItem+" MAC:"+this.newItem1+" IP:"+this.newItem2);
      this.newItem="";
    }
  }
  removeItem=function(index){
    this.items.splice(index,1);
  }
}
