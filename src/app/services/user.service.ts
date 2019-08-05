import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  studentList = [
    {name: 'Amar'},
    {name: 'Vishal'},
    {name: 'Harsimran'},
    {name: 'Tania'}
  ];
  constructor() { }
}
