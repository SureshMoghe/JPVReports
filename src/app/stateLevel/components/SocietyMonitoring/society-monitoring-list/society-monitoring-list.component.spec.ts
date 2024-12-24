import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMonitoringListComponent } from './society-monitoring-list.component';

describe('SocietyMonitoringListComponent', () => {
  let component: SocietyMonitoringListComponent;
  let fixture: ComponentFixture<SocietyMonitoringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyMonitoringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMonitoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
