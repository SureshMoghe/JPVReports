import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringStateLevelReportComponent } from './session-wise-milk-pouring-state-level-report.component';

describe('SessionWiseMilkPouringStateLevelReportComponent', () => {
  let component: SessionWiseMilkPouringStateLevelReportComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
