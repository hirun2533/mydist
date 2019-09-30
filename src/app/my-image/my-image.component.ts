import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  //template: '<img src="assets/dog.jpeg">',
 //template: '<p>  my-image works! inline </p>',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
