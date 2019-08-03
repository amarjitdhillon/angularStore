import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  studentList = [
    {name: 'amar'},
    {name: 'vishal'},
    {name: 'harsimran'},
    {name: 'claire'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
