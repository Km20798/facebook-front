import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/commet.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getAllComment( post_id:number){
    return this.http.get<Comment[]>(`http://localhost:8081/comments/${post_id}`);
  }
  
  addComment(comment:Comment , email:string , post_id:number){
    return this.http.post<Comment>(`http://localhost:8081/comments/${email}/${post_id}`,comment);
  }
}
