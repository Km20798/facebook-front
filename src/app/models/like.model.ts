import { User } from './user.model';
import { Post } from './post.model';

export class Like{
  id:number ;
  user:User;
  post:Post;
  active:number;
}