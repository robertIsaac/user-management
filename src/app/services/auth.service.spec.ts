import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {TestModule} from '../test/test.module';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
