import { Injectable } from '@angular/core';
import { Message } from './models/message/message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  messages: Message[];

  constructor() { }

  createInitMessages(): Message[] {
      this.messages = [
        new Message('user1', 'content1'),
        new Message('user2', 'content2'),
      ];
      console.log("initial mock messages array is created");
      return this.messages;
  }

}



