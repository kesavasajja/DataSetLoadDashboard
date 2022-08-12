import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NeXToolService {

  apiUrl: string = 'http://localhost:3000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
  public sendGetRequest(){
    return this.http.get(this.apiUrl+'OSData');
  }
  public GetTreeData(){
    return this.http.get(this.apiUrl+'TreeData');
  }
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
