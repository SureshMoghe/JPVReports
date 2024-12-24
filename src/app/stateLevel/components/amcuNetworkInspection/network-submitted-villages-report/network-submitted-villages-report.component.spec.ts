import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSubmittedVillagesReportComponent } from './network-submitted-villages-report.component';

describe('NetworkSubmittedVillagesReportComponent', () => {
  let component: NetworkSubmittedVillagesReportComponent;
  let fixture: ComponentFixture<NetworkSubmittedVillagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSubmittedVillagesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSubmittedVillagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
