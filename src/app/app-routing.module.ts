import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyButtonComponent } from './my-button/my-button.component';
import { MyImageComponent } from './my-image/my-image.component';

const routes: Routes = [
  { path: 'my-button', component: MyButtonComponent },
  { path: 'my-image', component: MyImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
