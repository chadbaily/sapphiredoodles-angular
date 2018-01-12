import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images.component';

@NgModule({
  declarations: [AppComponent, ImagesComponent],
  imports: [BrowserModule],
  exports: [ImagesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
