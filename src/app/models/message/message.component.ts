import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

import { Message } from './message.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})


export class MessageComponent implements OnInit {

  @Input() message: Message;

  //timestamp: string;
 // text: string;
//  username: UserComponent["username"];
 // username: string;


  constructor() {
    //this.message = new Message(
    //  'username20',
    //  'content20'
    //);
  }


  /*
  constructor(username: string, text: string) {
    this.username = username;
    //this.timestamp = "timestamp";
    this.text = text;
  }
  */

  ngOnInit() {
  }

/*
  addMessage(username: string, content: string): boolean {
    console.log(`Adding message: ${username} and content: ${content}`);
    return false;
  }
*/
}
