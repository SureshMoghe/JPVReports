import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNotSubmittedVillagesReportComponent } from './network-not-submitted-villages-report.component';

describe('NetworkNotSubmittedVillagesReportComponent', () => {
  let component: NetworkNotSubmittedVillagesReportComponent;
  let fixture: ComponentFixture<NetworkNotSubmittedVillagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkNotSubmittedVillagesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkNotSubmittedVillagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
