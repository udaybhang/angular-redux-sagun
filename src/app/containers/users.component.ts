import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {YoutubeRepository} from '../services/youtube-repository';

@Component({
  selector: 'youtube-users',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <youtube-user-list *ngIf="!this.loading && !this.error" [users]="this.users"></youtube-user-list>
      <mat-spinner *ngIf="this.loading"></mat-spinner>
      <youtube-error (reload)="this.tryAgain()" *ngIf="this.error && !loading"></youtube-error>
    </div>
  `,
  styles: [``]
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = false;

  constructor(private youtubeRepository: YoutubeRepository) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const observer$ = this.youtubeRepository.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.subscribe(data => {
      this.users = data;
    });
    loading$.subscribe(data => {
      this.loading = data;
    });
    error$.subscribe(data => {
      this.error = data;
    });
  }

  tryAgain() {
    this.youtubeRepository.getUserList(true);
  }
}


// reducer -> it contain a state (global state)
// it will take an action -> it will return a new state

// action -> it will contain a payload and a type

// Dependency Injection Principle
// you should not depend on something directly
// component -> youtube repo -> apiService -> http Service -> http client
