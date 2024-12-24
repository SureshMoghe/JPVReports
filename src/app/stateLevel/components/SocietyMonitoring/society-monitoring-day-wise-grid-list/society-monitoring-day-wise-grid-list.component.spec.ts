import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMonitoringDayWiseGridListComponent } from './society-monitoring-day-wise-grid-list.component';

describe('SocietyMonitoringDayWiseGridListComponent', () => {
  let component: SocietyMonitoringDayWiseGridListComponent;
  let fixture: ComponentFixture<SocietyMonitoringDayWiseGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyMonitoringDayWiseGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMonitoringDayWiseGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
