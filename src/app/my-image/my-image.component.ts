import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  someVariable = 'some image variable';

  constructor() { }

  ngOnInit() {
  }

  imgFunction() {
    console.log('inside MyImageComponent');
  }

}
