import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Like } from '../models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http:HttpClient) { }

  addLike(like:Like){
    return this.http.post<Like>(`http://localhost:8081/likes` , like);
  }

  getByPost(id:number){
    return this.http.get<Like[]>(`http://localhost:8081/likes/${id}`);
  } 
}
