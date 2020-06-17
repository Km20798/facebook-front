import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/sign/nav/nav.component';
import { NgModule } from '@angular/core';
import { SignComponent } from './components/sign/sign.component';
import { SignupComponent } from './components/sign/signup/signup.component';
import { LeftComponent } from './components/sign/signup/left/left.component';
import { RightComponent } from './components/sign/signup/right/right.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { NavHomeComponent } from './components/home/nav-home/nav-home.component';
import { GetPostsComponent } from './components/home/posts/get-posts/get-posts.component';
import { ProfileComponent } from './components/home/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignComponent,
    SignupComponent,
    LeftComponent,
    RightComponent,
    HomeComponent,
    PostsComponent,
    NavHomeComponent,
    GetPostsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule  , 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
