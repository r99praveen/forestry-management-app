import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContarctComponent } from './update-contarct.component';

describe('UpdateContarctComponent', () => {
  let component: UpdateContarctComponent;
  let fixture: ComponentFixture<UpdateContarctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContarctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContarctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
