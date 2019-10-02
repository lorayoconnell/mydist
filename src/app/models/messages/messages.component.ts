import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: MessageComponent[];

  /*
  constructor() {
    this.messages = [
      new MessageComponent('time1', 'string1'),
      new MessageComponent('time2', 'string2'),
      new MessageComponent('time3', 'string3'),
    ];
  }
  */

  constructor() {
    this.messages;  // ... this isn't doing anything ... 
  }

  ngOnInit() {
  }

  addMessage(msg: MessageComponent) {
    this.messages.push(msg);
  }


}
