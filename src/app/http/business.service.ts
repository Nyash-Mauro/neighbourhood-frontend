import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { business } from '../models/business';
@Injectable({
  providedIn: 'root',
})
export class businessService {
  private apiRoot = '';
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
  getbusiness(): Observable<business[]> {
    return this.http.get<business[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched users');
      }),
      catchError(this.handleError<business[]>('geUsers', []))
    );
  }
}