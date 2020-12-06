import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}
  private apiRoot = 'https://hoodbe.herokuapp.com/';
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

  getAdmin(): Observable<post[]> {
    return this.http.get<post[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched the post');
      }),
      catchError(this.handleError<post[]>('getpost', []))
    );
  }
}

