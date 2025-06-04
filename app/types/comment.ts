export interface Comment {
  id: string;
  postId: string;   // from BlogPost
  userId: string;   // from User
  body: string;
  createdAt: Date;
}
