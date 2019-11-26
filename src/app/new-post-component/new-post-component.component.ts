import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['post-title'];
    const paragraph = form.value['post-prg'];
    const loveIts = 0;
    console.log(title, paragraph);
    this.postService.addPost(title, paragraph, loveIts);
    this.router.navigate(['/posts']);
  }

}
