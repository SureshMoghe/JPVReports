import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringCertificateDashboardComponent } from './farmer-milk-pouring-certificate-dashboard.component';

describe('FarmerMilkPouringCertificateDashboardComponent', () => {
  let component: FarmerMilkPouringCertificateDashboardComponent;
  let fixture: ComponentFixture<FarmerMilkPouringCertificateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringCertificateDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringCertificateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
