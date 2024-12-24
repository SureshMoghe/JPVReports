import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerVolunteersLoggedInReportComponent } from './vv-farmer-volunteers-logged-in-report.component';

describe('VvFarmerVolunteersLoggedInReportComponent', () => {
  let component: VvFarmerVolunteersLoggedInReportComponent;
  let fixture: ComponentFixture<VvFarmerVolunteersLoggedInReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerVolunteersLoggedInReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerVolunteersLoggedInReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
