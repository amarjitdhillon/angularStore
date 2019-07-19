import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetEmployeeDataService {

  baseURL = 'http://localhost:8081';
  http: HttpClient;

  constructor(http: HttpClient) {
  }

  getEmployeeDetails() {
    return this.http.get(this.baseURL);
  }
}
