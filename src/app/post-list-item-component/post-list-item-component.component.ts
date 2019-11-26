import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postParagraph: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() indexOfPost: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  OnLike() {
    this.postService.LikeOne(this.indexOfPost);
  }

  OnDislike() {
    this.postService.DislikeOne(this.indexOfPost);
  }

  OnRemove() {
    this.postService.RemovePost(this.indexOfPost);
  }
}
