import { Component } from '@angular/core';
import { Message } from './models/message/message.model';

//import { addMessage } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  messages: Message[];
  
  constructor() {
    this.messages = [
      new Message('user1', 'content1'),
      new Message('user2', 'content2'),
    ];
  }
  
  title = 'mydist';

  
  getMessage(username: HTMLInputElement, content: HTMLInputElement): boolean {
    console.log(`Getting message: ${username.value} and content: ${content.value}`);
    //MessageComponent msg 
    //addMessage(username.value, content.value);
    this.messages.push(new Message(username.value, content.value));
    username.value = '';
    content.value = '';
    return false;
  }


}
