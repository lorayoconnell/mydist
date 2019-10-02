import { Component } from '@angular/core';
import { MessagesService } from '../app/messages.service';
import { Message } from './models/message/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  messages: Message[];
  
  constructor(public messagesService : MessagesService) { }
  
  title = 'mydist';

  ngOnInit() {
    this.messages = this.messagesService.createInitMessages();
  }

  getMessage(username: HTMLInputElement, content: HTMLInputElement): boolean {
    console.log(`Getting message: ${username.value} and content: ${content.value}`);
    this.messages.unshift(new Message(username.value, content.value));  // unshift prepends to array
    username.value = '';  // clear input fields
    content.value = '';   // ""
    return false;
  }

}
