import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  OnLike() {
    this.postLoveIts++;
  }

  OnDislike() {
    this.postLoveIts--;
  }
}
