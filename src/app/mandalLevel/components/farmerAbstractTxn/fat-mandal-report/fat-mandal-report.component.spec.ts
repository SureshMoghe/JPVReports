import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatMandalReportComponent } from './fat-mandal-report.component';

describe('FatMandalReportComponent', () => {
  let component: FatMandalReportComponent;
  let fixture: ComponentFixture<FatMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
