import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateComponent} from './update.component';
import {of} from 'rxjs';
import {User} from '../../classes/user';
import {TestModule} from '../../test/test.module';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [TestModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    const user: User = {
      id: 1,
      first_name: 'first_name',
      last_name: 'last_name',
      avatar: 'avatar'
    };
    component.user$ = of(user);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
