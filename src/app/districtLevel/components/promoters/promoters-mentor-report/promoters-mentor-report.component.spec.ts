import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersMentorReportComponent } from './promoters-mentor-report.component';

describe('PromotersMentorReportComponent', () => {
  let component: PromotersMentorReportComponent;
  let fixture: ComponentFixture<PromotersMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
