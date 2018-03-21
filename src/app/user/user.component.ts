import { IUser } from './../../models/user';
import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'qm-user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  
  @Input() user: IUser;
  
  constructor() { }

  ngOnInit() {
  }

}
