import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/http/post.service';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import {hood} from '../models/hoods'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  showForm=false;
  showUsers=false;
  createForm = false;
  businessList = false;
  createBusiness = false;
  neighbourhoods:hood[];
  user:User;
  
  hoodDelete(deleteNeighbourhood, index){
    if(deleteNeighbourhood){
        let toDelete =confirm("Are you sure you want to delete this Neighbourhood?")

        if(toDelete){
            this.neighbourhoods.splice(index)
        }
    }
}

  showBusinessList(){
    this.businessList = !this.businessList
  }
  showBusiness(){
    this.createBusiness = !this.createBusiness
  }
  showDetails() {
    this.showForm = !this.showForm
    
  }  
  showUsersList(){
    this.showUsers= !this.showUsers
  }

  showCreationform(){
    this.createForm = !this.createForm
  }

  constructor(private userService: PostService ,private http:HttpClient ) { }

  ngOnInit(){
      this.showForm = false;
      this.showUsers =false;
      this.createForm = false;
    //  this.userService.login;
    
  }

}
