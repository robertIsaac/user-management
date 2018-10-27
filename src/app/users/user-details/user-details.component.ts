import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @Input() userId: number;
  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.user$ = this.userService.getUser(this.userId);
  }

}
