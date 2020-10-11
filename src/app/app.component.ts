import {Component} from '@angular/core';

@Component({
  selector: 'youtube-root',
  template: `
  `,
  styles: [`
  `]
})
export class AppComponent {
  constructor() {
  }
}

// router-outlet
// dashboard -> header -> router-outlet
// we need to create actions, reducer -> contain state
// action dispatch -> reducer will destroy old state and return a new one
// selector-> to get latest value from reducer
