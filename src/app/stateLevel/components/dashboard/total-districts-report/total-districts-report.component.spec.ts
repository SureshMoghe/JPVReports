import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDistrictsReportComponent } from './total-districts-report.component';

describe('TotalDistrictsReportComponent', () => {
  let component: TotalDistrictsReportComponent;
  let fixture: ComponentFixture<TotalDistrictsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDistrictsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDistrictsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
