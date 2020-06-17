import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  //--------------------Attributes--------------------------
  users:User[];
  day:number=20 ;
  month:number=7;
  year:number=1998;
  user:User={
    id:null ,
    firstname:'',
    surname:'',
    email:'',
    password:'',
    date:null, 
    gender:''
  }
  //Arrays
  days:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ,21,22,23,24,25,26,27,28,29,30,31];
  // months:string[] = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sept' , 'Oct' , 'Nov' , 'Dec'];
  years:number[]=[1990,1991,1992,1993,1994,1995,1996,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008 , 2009 , 2010 , 2011 , 2012 , 2013 , 2014 , 2015 , 2016 , 2017 , 2018 , 2019 , 2020];
  months:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  addUser(){
    this.user.date = new Date(this.year , this.month , this.day);
    this.userService.addUser(this.user).subscribe(data => {
      console.log("saved cussess");
    });
  }

}
