import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'posts-list',
    template: `
    <div>
	    <h1>My awesome posts</h1>
	    <hr>

      <div class="well">
        <div>Keep reading...</div>
      </div>
      <div class="row">
        <div *ngFor="let post of posts" class="col-xs-12 col-sm-6 col-md-12">
          <post-thumbnail [post]="post"></post-thumbnail>
        </div>
      </div>
    </div>
    `
})
export class PostsListComponent implements OnInit {
    posts: any;

    constructor() {
    }

    ngOnInit() {
        this.posts = [
            {
                id: 1,
                title: 'F-Bound polymorphism',
                imageUrl: '/assets/images/post-1.jpg',
                publishDate: '09/02/2020',
                shortDescription: 'yet not..'
            },
            {
                id: 2,
                title: 'SOLID in the use',
                imageUrl: '/assets/images/post-2.jpg',
                publishDate: '09/02/2020',
                shortDescription: 'not yet..'
            },
        ]
    }
}