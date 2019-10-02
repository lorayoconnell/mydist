import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MessageComponent } from './models/message/message.component';
import { MessagesComponent } from './models/messages/messages.component';
import { UserComponent } from './models/user/user.component';

import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyButtonComponent,
    MessageComponent,
    MessagesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MyServiceService    // not in imports[]?
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
