import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  template: '<nav-bar></nav-bar><posts-list></posts-list>',
  styles: []
})
export class BlogAppComponent {
  title = 'eYeBlog';
}
