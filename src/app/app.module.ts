import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [AppComponent, ImagesComponent, IndexComponent],
  imports: [BrowserModule],
  exports: [ImagesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
