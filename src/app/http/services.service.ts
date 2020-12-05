import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { services } from '../models/services';
@Injectable({
  providedIn: 'root',
})
export class servicesService {
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
  getbusiness(): Observable<services[]> {
    return this.http.get<services[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched users');
      }),
      catchError(this.handleError<services[]>('geUsers', []))
    );
  }
}