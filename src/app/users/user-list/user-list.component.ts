import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../classes/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  selectedUserId: number;
  userList$: Observable<User[]>;
  params$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.params$ = this.activatedRoute.params.subscribe(params => {
      this.selectedUserId = +params['id'];
    });
    this.userList$ = this.userService.userList;
  }

  ngOnDestroy() {
    this.params$.unsubscribe();
  }

}
