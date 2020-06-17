import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Attributes
  email:string;
  password:string;

  constructor(private userService:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.userService.login(this.email , this.password).subscribe(data => {
      sessionStorage.setItem("user" , this.email);
      this.router.navigate(['/home']);
    },error =>{
      this.router.navigate(['/']);
    });
  }

}
