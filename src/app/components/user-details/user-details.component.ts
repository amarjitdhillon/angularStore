import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {
  name: any;
  subscriber: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriber = this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
    });
  }

}
