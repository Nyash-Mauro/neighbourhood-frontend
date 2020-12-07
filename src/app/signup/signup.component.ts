import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from 'src/app/http/auth-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;
  constructor() { 
    
  }
  private authService:AuthServiceService
  private router:Router

  ngOnInit(): void {
    
  }
  signup(user_name: string,emailaddress: string, password: string) {
    console.log('username, emailaddress,password ', user_name,emailaddress, password);
  
    this.authService.signup(user_name,emailaddress, password).subscribe(
      (success) => {
        this.router.navigate(['/login']);
      },
      (error) => (this.error = error)
    );

}}
