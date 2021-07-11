import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerRegistrationComponent } from './scheduler-registration.component';

describe('SchedulerRegistrationComponent', () => {
  let component: SchedulerRegistrationComponent;
  let fixture: ComponentFixture<SchedulerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
