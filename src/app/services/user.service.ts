import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8081/users");
  }

  addUser(user:User){
    return this.http.post("http://localhost:8081/users" , user);
  }

  login(email , password):Observable<User>{
    return this.http.get<User>(`http://localhost:8081/users/${email}/${password}`);
  }

  getUser(email:string){
    return this.http.get<User>(`http://localhost:8081/users/${email}`);
  }
  

}
