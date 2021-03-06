import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import jwtDecode from 'jwt-decode';
import { Observable} from 'rxjs';
import * as moment from 'moment';
import { JWTPayload } from '../models/jwtpayload';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiRoot=environment+'https://hoodbe.herokuapp.com/api/v1/signup/';
  private httpClient;

  constructor(private http:HttpClient)
  {}
  private setSession(authResult){
    console.log({authResult});

    const token = authResult.access;
    const payload = <JWTPayload>jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    if (authResult.hasOwnProperty('refresh'))
    {
      localStorage.setItem('token',authResult.access);
      localStorage.setItem('refresh',authResult.refresh);
      localStorage.setItem('expires_at',JSON.stringify(expiresAt.valueOf()));
    }
    else{
      localStorage.setItem('token',authResult.access);
      localStorage.setItem('expires_at',JSON.stringify(expiresAt.valueOf()));
    }
  }
  get token():string{
    return localStorage.getItem('token');
  }

  get refresh():string{
    return localStorage.getItem('refresh');
  }

    signup(user_name:string,email:string,password): Observable<any> {
      return this.httpClient.post({ user_name, email,password })
    }

  login(user_name:string,password)
  {
    return this.http
    .post(this.apiRoot.concat('token/'), { user_name,password })
    .pipe(
      tap((response) => {
        console.log({ response });
        this.setSession(response);
      }),
      shareReplay()
    );
  } 
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('expires_at');
  }
  refreshToken(){
    if (
      moment().isBetween(
        this.getExpiration().subtract(1, 'days'),
        this.getExpiration()
      )
    ){
      return this.http.post(this.apiRoot.concat('token/refresh/'),{refresh:this.refresh})
      .pipe(
        tap((response) => {
          console.log('refreshToken response',response);this.setSession(response);
        }),
        shareReplay()
      )
      .subscribe();
    }
  }
  getExpiration(){
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
  isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut(){
    return !this.isLoggedIn();
  }

}
