import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]

})
export class PostThumbnailComponent {
  @Input() post: any;
  
}