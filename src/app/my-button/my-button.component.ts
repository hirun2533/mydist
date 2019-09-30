import { Component, OnInit, NgModule } from '@angular/core';
import { myService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  providers: [myService]
})


export class MyButtonComponent implements OnInit {
     //num: number;
     color: boolean;

    constructor( private service: myService) { 
      //this.num = 0;
      this.service = service;
    
    }
    
    StyleColor(){
      return{
        'is-liked': this.color == true
      }
    }
   
    decideBoolean () { 
    console.log(this.color);

    this.color = this.service.likeImage(this.color);
    //this.num++;
    console.log(this.color);
  }

    ngOnInit() {

    this.color = false;

    }
    
  }
   