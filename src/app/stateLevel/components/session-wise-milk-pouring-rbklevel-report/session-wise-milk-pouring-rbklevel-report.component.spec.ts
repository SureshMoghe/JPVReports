import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringRBKLevelReportComponent } from './session-wise-milk-pouring-rbklevel-report.component';

describe('SessionWiseMilkPouringRBKLevelReportComponent', () => {
  let component: SessionWiseMilkPouringRBKLevelReportComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringRBKLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringRBKLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringRBKLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
