import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Comment } from 'src/app/models/commet.model';
import { LikeService } from 'src/app/services/like.service';
import { Like } from 'src/app/models/like.model';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {

  show:boolean = false;
  posts:Post[];
  comments:Comment[];
  gettenPost:Post;
  user:User;
  currentPost:Post;
  likes:Like[];
  numLikes:number;
  post:Post={
    id:null,
    date:new Date(),
    post:'',
    user:{
      id:null,
      firstname:'',
      surname:'',
      email:'',
      password:'',
      date:null , 
      gender:''
    }
  }
  comment:Comment={
    id:null , 
    comment:'',
    post:null,
    user:null,
    date:new Date()
  }
  like:Like = {
    id:null ,
    user:null ,
    post:null,
    active:0
  }

  

  constructor(private postService:PostService , private route:ActivatedRoute
    , private commentService:CommentService , private userService:UserService , private likeServices:LikeService ) { }

  ngOnInit(): void {
    this.getUser(sessionStorage.getItem("user"));
    this.getAllPosts();
  }

  showDialog(id:number , u:User){
    this.show = !this.show;
    this.postService.getPost(u.email , id).subscribe(data => {
      this.currentPost = data;
      this.getAllComments(this.currentPost.id);
      this.getAllLikeByPost(this.currentPost.id)
    })
  
  }  

  getUser(email:string){
    this.userService.getUser(email).subscribe(data => {
      this.user = data;
      
    });
  }

  getAllPosts(){
    this.posts=[];
    this.postService.getAllPosts().subscribe(data => {
      data.forEach(element => {
        this.posts.unshift(element);
      });
    });
  }

  getAllComments(id){
    this.commentService.getAllComment(id).subscribe(data =>  {
      this.comments = data;
    })
  }
  
  addPost(){
    this.post.user = this.user;
    this.postService.addPost(this.post , sessionStorage.getItem("user")).subscribe(data => {
      this.getAllPosts();
      this.post.post='';
    });
  }

  backinshow(){
    if(this.show === true){
      this.show = false ;
    }
  }

  addComment(id:number ,u:User){

    this.postService.getPost(u.email , id).subscribe(data => {
      this.comment.post = data ;
      this.comment.user = this.user;
      this.commentService.addComment(this.comment , sessionStorage.getItem("user") , id).subscribe(data => {
        this.comment.comment = '';
        this.getAllComments(id);
      })
    })
    
  }

  getAllLikeByPost(id){
    this.numLikes = 0;
    this.likeServices.getByPost(id).subscribe(data => {
      this.likes = data ;
      data.forEach(element => {
        this.numLikes++;
      });
    })
  }

  addLike(id:number , u:User){
    
    this.postService.getPost(u.email  , id).subscribe(data => {
      this.like.post = data;
      this.like.user = this.user;
      this.like.active = 1 ;
      console.log(this.like);
      this.likeServices.addLike(this.like).subscribe(data => {
        console.log(data);
        this.getAllLikeByPost(id);
      })
    })  
    
  }

}
