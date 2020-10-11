import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../models/user';

@Component({
  selector: 'youtube-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list [users]="this.users"></youtube-user-list>
    </div>
  `,
  styles: [``]
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getAllPost().subscribe(data => {
      this.users = data;
    });
  }
}
