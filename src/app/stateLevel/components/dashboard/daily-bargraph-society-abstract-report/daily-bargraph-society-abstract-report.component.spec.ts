import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBargraphSocietyAbstractReportComponent } from './daily-bargraph-society-abstract-report.component';

describe('DailyBargraphSocietyAbstractReportComponent', () => {
  let component: DailyBargraphSocietyAbstractReportComponent;
  let fixture: ComponentFixture<DailyBargraphSocietyAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyBargraphSocietyAbstractReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBargraphSocietyAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
