import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../classes/user';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() user$: Observable<User>;
  updateForm: FormGroup;
  @Output() close: EventEmitter<void> = new EventEmitter();
  userId: number;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
    this.user$.pipe(first()).subscribe(user => {
      this.updateForm.controls['first_name'].setValue(user.first_name);
      this.updateForm.controls['last_name'].setValue(user.last_name);
      this.userId = user.id;
    });
  }

  updateSubmit() {
    this.userService.updateUser(this.userId, this.updateForm.value);
    this.close.emit();
  }

}
