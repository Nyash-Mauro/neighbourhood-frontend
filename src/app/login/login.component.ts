import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from 'src/app/http/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any

  constructor(
    private authService:AuthServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(user_name: string, password: string) {
    console.log('user_name, password ', user_name ,password);

    this.authService.login(user_name, password).subscribe(
      (success) => this.router.navigate(['/profile']),
      (error) => (this.error = error)
    );
    
}
signup(user_name: string,emailaddress: string, password: string) {
  console.log('user_name, emailaddress,password ', user_name,emailaddress, password);

  this.authService.signup(user_name,emailaddress, password).subscribe(
    (success) => this.router.navigate(['/login']),
    (error) => (this.error = error)
  );

}}