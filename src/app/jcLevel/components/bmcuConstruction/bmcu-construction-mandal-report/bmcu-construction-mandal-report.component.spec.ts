import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionMandalReportComponent } from './bmcu-construction-mandal-report.component';

describe('BmcuConstructionMandalReportComponent', () => {
  let component: BmcuConstructionMandalReportComponent;
  let fixture: ComponentFixture<BmcuConstructionMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
