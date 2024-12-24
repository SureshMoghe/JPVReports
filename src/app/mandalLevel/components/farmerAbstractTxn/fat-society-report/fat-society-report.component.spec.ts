import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatSocietyReportComponent } from './fat-society-report.component';

describe('FatSocietyReportComponent', () => {
  let component: FatSocietyReportComponent;
  let fixture: ComponentFixture<FatSocietyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatSocietyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatSocietyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
