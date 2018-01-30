import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    IndexComponent,
    ContactComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [ImagesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
