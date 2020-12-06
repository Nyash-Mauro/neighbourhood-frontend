import { Component, OnInit } from '@angular/core';
import {PostService} from 'src/app/http/post.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
