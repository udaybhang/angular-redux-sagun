import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../models/user';
import {Store} from '@ngrx/store';
import {getUserLoaded, getUserLoading, getUsers, RootReducerState} from '../../reducers';
import {UserListRequestAction, UserListSuccessAction} from '../../actions/user-action';
import {combineLatest} from 'rxjs';

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

  constructor(private apiService: ApiService, private store: Store<RootReducerState>) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData = this.store.select(getUsers);
    combineLatest([loaded$, loading$]).subscribe((data) => {
      if (!data[0] && !data[1]) {
        this.store.dispatch(new UserListRequestAction());
        this.apiService.getAllPost().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({data: res}));
        });
      }
    });
    getUserData.subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
