import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {TestModule} from '../test.module';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [TestModule]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
