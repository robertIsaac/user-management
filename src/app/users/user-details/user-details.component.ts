import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
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
  @Output() delete: EventEmitter<void> = new EventEmitter();
  @Output() update: EventEmitter<void> = new EventEmitter();

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.user$ = this.userService.getUser(this.userId);
  }

  updateUser() {
    this.update.emit();
  }

  deleteUser() {
    this.delete.emit();
  }

}
