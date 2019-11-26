import { Subject } from 'rxjs';

export class PostService {

  postsSubject = new Subject<any[]>();

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

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  LikeOne(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
  }

  DislikeOne(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
  }

  addPost(title: string, paragraph: string, loveIts: number) {
    const postObject = {
      id: 0,
      title: '',
      paragraph: '',
      loveIts: 0,
      created_at: new Date(),
    };
    postObject.loveIts = 0;
    postObject.title = title;
    postObject.paragraph = paragraph;
    postObject.id = this.posts.length + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  RemovePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostSubject();
  }
}
