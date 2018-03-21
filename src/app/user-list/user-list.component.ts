import { IUser } from './../../models/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  usersList: IUser[];

  ngOnInit() {
    this.userService.getAllUsers().then(res => {
      console.log(res);
      this.usersList = res;
    });
  }
}
