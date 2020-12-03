import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// from {AuthServiceService} from '':

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any

  constructor(
    // private authService:AuthServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(fullname: string,emailaddress: string, password: string) {
    console.log('username, password ', fullname,emailaddress, password);

    this.authService.login(fullname,emailaddress, password).subscribe(
      (success) => this.router.navigate(['/']),
      (error) => (this.error = error)
    );
}
