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

  login(username: string,emailaddress: string, password: string) {
    console.log('username, emailaddress,password ', username,emailaddress, password);

    this.authService.login(username,emailaddress, password).subscribe(
      (success) => this.router.navigate(['/']),
      (error) => (this.error = error)
    );
    
}
signup(username: string,emailaddress: string, password: string) {
  console.log('username, emailaddress,password ', username,emailaddress, password);

  this.authService.signup(username,emailaddress, password).subscribe(
    (success) => this.router.navigate(['/login']),
    (error) => (this.error = error)
  );

}}