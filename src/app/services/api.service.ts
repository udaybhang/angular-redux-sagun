import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {
  }

  getAllUser(): Observable<User[]> {
    return this.httpService.get('/users')
      .pipe(map(data => data as User[]));
  }

  getUser(id: number): Observable<User> {
    return this.httpService.get('/users/' + id);
  }

}
