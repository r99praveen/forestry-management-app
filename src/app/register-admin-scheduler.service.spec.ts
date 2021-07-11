import { TestBed } from '@angular/core/testing';

import { RegisterAdminSchedulerService } from './register-admin-scheduler.service';

describe('RegisterAdminSchedulerService', () => {
  let service: RegisterAdminSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterAdminSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
