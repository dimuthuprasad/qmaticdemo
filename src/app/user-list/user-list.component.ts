import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../redux/app-state';
import { IUser } from './../../models/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: Observable<IUser[]>;

  constructor(private userService: UserService, private store: Store<AppState>) {
    this.usersList = this.store.select(state => state.usersList);
   }

  ngOnInit() {
    this.userService.getAllUsers().catch();
  }
}
