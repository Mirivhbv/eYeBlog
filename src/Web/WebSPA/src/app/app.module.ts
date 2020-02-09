import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogAppComponent } from './blog-app.component';

@NgModule({
  declarations: [
    BlogAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BlogAppComponent]
})
export class AppModule { }
