import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { tap } from 'rxjs/operators';
import { Observable,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { profile } from '../models/profile';import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // private apiRoot = '';

  // constructor(private http: HttpClient) {}

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getUsers(): Observable<profile[]> {
  //   return this.http.get<profile[]>(this.apiRoot).pipe(
  //     tap((_) => {
  //       console.log('fetched profile');
  //     }),
  //     catchError(this.handleError<profile[]>('geProfile', []))
  //   );
  // }
  private User: profile = { 
    firstname: " ",
    lastname: " ",
    email: " ",
    bio: " ",
    nickname:"",
    contact: 0,
  };

  getUserProfile() {
    return this.User;
  }

  setUserProfile(User: profile) {
    this.User = User;
    // this.router.navigate(["profile"]);
  }

  constructor(private router: Router) {}
}
