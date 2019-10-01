import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  timestamp: string;
  text: string;

  constructor(timestamp: string, text: string) {
    this.timestamp = timestamp;
    this.text = text;
  }

  ngOnInit() {
  }

}
