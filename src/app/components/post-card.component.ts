import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  template: `
    <div class="card mb-4"
    >
      <h5 id="title" class="card-header">Post</h5>
      <div class="card-body">
        <h5 class="card-title fs-4">{{ post.title | maiuscolo }}</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <ng-content></ng-content>
        
      </div>
    </div>
  `,
  styles: [
    `.card-header{
      background-color : #EC9AC0
    },
    #title {
      font-family: 'Lobster', cursive;
    }`
  ],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() { }

  ngOnInit(): void { }
}
