import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerVolunteersListReportComponent } from './vv-farmer-volunteers-list-report.component';

describe('VvFarmerVolunteersListReportComponent', () => {
  let component: VvFarmerVolunteersListReportComponent;
  let fixture: ComponentFixture<VvFarmerVolunteersListReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerVolunteersListReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerVolunteersListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
