import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../classes/user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input() user: User;
  @Input() selected: boolean;
  @Output() delete: EventEmitter<void> = new EventEmitter();
  @Output() update: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteUser() {
    this.delete.emit();
  }

  updateUser() {
    this.update.emit();
  }

}
