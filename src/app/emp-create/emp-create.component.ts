import {Component, Input, OnInit} from '@angular/core';
import {GetEmployeeDataService} from '../get-employee-data.service';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.sass']
})
export class EmpCreateComponent implements OnInit {

  @Input() Student = {};
  constructor(private getEmployeeDataService: GetEmployeeDataService, private httpclient: HttpClient) {
    this.httpclient.get('http://localhost:8081').subscribe(data => console.log(data));
  }
  ngOnInit() {
  }
}
