import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationStatusComponent } from './farmer-registration-status.component';

describe('FarmerRegistrationStatusComponent', () => {
  let component: FarmerRegistrationStatusComponent;
  let fixture: ComponentFixture<FarmerRegistrationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
