import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogAppComponent } from './blog-app.component';
import { PostsListComponent } from './posts/posts-list.component';
import { PostThumbnailComponent } from './posts/post-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    BlogAppComponent,
    PostsListComponent,
    PostThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BlogAppComponent]
})
export class AppModule { }
