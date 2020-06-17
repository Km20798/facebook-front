import { Post } from './post.model';
import { User } from './user.model';

export class Comment{
  id:number ; 
  comment:string;
  post:Post;
  user:User;
  date:Date;
}