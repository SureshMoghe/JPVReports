import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationDetailComponent } from './farmer-registration-detail.component';

describe('FarmerRegistrationDetailComponent', () => {
  let component: FarmerRegistrationDetailComponent;
  let fixture: ComponentFixture<FarmerRegistrationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
