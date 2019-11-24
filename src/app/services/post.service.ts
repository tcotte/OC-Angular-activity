export class PostService{
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

  LikeOne(index: number){
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
  }

  DislikeOne(index: number){
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
  }
}
