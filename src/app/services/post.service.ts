import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8081/posts");
  }

  addPost(post:Post , email:string){
    return this.http.post(`http://localhost:8081/posts/${email}` , post);
  }

  getPost(email:string ,id:number){
    return this.http.get<Post>(`http://localhost:8081/posts/${email}/${id}`);
  }
}
