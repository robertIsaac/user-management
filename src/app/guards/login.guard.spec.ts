import {inject, TestBed} from '@angular/core/testing';

import {LoginGuard} from './login.guard';
import {TestModule} from '../test/test.module';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard],
      imports: [TestModule]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
