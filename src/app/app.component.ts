import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      paragraph : 'paragraph1',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon second post',
      paragraph : 'paragraph2',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      paragraph : 'paragraph3',
      loveIts: -1,
      created_at: new Date()
    }
  ];

  // class Post {
  // title: string;
  // content: string;
  // loveIts: number;
  // created_at: Date;
  //
  // constructor(title, content, loveIts) {
  //   this.title = title;
  //   this.content = content;
  //   this.loveIts = loveIts;
  //   this.created_at = new Date();
  // }

}
