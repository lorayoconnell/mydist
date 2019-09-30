import { Injectable } from '@angular/core';

import { MyButtonComponent } from './my-button/my-button.component';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  constructor() { }

  likeImage(isLiked): boolean {
    return !isLiked;
  }

}
