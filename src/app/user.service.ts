import { IUser } from './../models/user';
import { AppState } from './../redux/app-state';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPromise } from 'q';
import { Store } from '@ngrx/store';


@Injectable()
export class UserService {

  private readonly userList: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http, private store: Store<AppState>) { }

  getAllUsers(): Promise<IUser[]> {
    return this.http.get(this.userList)
      .toPromise().then(res => {
        console.log(res.json());
        this.store.dispatch({
          type: 'ADD_USERS',
          payload: res.json() as IUser[]
        });

        return res.json() as IUser[];
      });
  }
}
