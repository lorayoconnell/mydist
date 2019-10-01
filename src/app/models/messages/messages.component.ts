import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: MessageComponent[];

  constructor() {
    this.messages = [
      new MessageComponent('time1', 'string1'),
      new MessageComponent('time2', 'string2'),
    ];
  }

  ngOnInit() {
  }

}
