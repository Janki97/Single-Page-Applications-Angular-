import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import { Iemployee } from './employee';
// import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = '/assets/employee.json';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {

    return this.http.get(this.employeeUrl);
    // return this.http.get<Iemployee[]>(this.employeeUrl)
    //   .pipe(
    //     tap(data => console.log('All: ' + JSON.stringify(data))),
    //     catchError(this.handleError)
    //   );
  }

  // private handleError(err: HttpErrorResponse) {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}
