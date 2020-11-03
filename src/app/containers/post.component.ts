import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {YoutubeRepository} from '../services/youtube-repository';

@Component({
  selector: 'youtube-post',
  template: `
    <youtube-user-list [users]="this.users"></youtube-user-list>
  `,
  styles: [``]
})

export class PostComponent implements OnInit {
  users: User[] = [];

  constructor(private youtubeRepo: YoutubeRepository) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const observer$ = this.youtubeRepo.getUserList();
    const userData$ = observer$[1];
    userData$.subscribe(data => {
      this.users = data;
    });
  }
}
