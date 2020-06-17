import { User } from './user.model';

export class Post{
  id:number;
  date:Date;
  post:string;
  user:User;
}