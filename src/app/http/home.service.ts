import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiRoot = 'https://hoodbe.herokuapp.com/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched users');
      }),
      catchError(this.handleError<User[]>('geUsers', []))
    );
  }
}
