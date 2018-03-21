import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPromise } from 'q';
import {IUser} from '../models/user';


@Injectable()
export class UserService {

  private readonly userList: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getAllUsers (): Promise< IUser[]> {
    return this.http.get(this.userList)
          .toPromise().then(res => {
            console.log(res.json());
            return res.json() as IUser[];
          });
  }
}
