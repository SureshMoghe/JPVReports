import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMonitoringDayWiseCheckComponent } from './society-monitoring-day-wise-check.component';

describe('SocietyMonitoringDayWiseCheckComponent', () => {
  let component: SocietyMonitoringDayWiseCheckComponent;
  let fixture: ComponentFixture<SocietyMonitoringDayWiseCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyMonitoringDayWiseCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMonitoringDayWiseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
