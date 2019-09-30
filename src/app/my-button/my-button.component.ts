import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service'; 

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  btnVar = 'some button variable';
  isLiked = false;;

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
  }

  btn() {
    console.log('inside MyButtonComponent');
    this.updateBool();
  }

  updateBool() {
    // pass boolean isLiked to my-service
    this.isLiked = this.myService.likeImage(this.isLiked);
  }

}
