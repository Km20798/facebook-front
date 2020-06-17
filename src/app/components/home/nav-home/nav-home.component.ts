import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  user:User={
    id:null ,
    firstname:'',
    surname:'',
    email:'',
    password:'',
    date:null, 
    gender:''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser((sessionStorage.getItem("user"))).subscribe(data => {
      this.user=data;
      
    })
  }


}
