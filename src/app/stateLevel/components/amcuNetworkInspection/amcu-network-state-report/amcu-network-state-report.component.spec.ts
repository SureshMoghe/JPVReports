import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNetworkStateReportComponent } from './amcu-network-state-report.component';

describe('AmcuNetworkStateReportComponent', () => {
  let component: AmcuNetworkStateReportComponent;
  let fixture: ComponentFixture<AmcuNetworkStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNetworkStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNetworkStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
