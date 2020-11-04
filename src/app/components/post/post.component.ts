import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.models';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  moment = moment;
  isLiked: boolean;
  constructor() {}

  ngOnInit() {
  }

  trimString(post: Post, length: number) {
      return post.content.length > length ?
             post.content.substring(0, length) + '...' :
             post.content;
  }

  onLike(id: string){
    this.isLiked = !this.isLiked;
    this.isLiked ? this.post.likes++ : this.post.likes--;
  }

}
