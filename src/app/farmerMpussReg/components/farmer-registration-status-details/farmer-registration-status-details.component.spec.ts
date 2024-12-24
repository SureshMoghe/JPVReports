import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationStatusDetailsComponent } from './farmer-registration-status-details.component';

describe('FarmerRegistrationStatusDetailsComponent', () => {
  let component: FarmerRegistrationStatusDetailsComponent;
  let fixture: ComponentFixture<FarmerRegistrationStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationStatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
