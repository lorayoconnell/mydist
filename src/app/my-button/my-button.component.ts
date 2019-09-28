import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  btnVar = 'some button variable';

  constructor() { }

  ngOnInit() {
  }

  btn() {
    console.log('inside MyButtonComponent');
  }

}
