import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionRbkReportComponent } from './bmcu-construction-rbk-report.component';

describe('BmcuConstructionRbkReportComponent', () => {
  let component: BmcuConstructionRbkReportComponent;
  let fixture: ComponentFixture<BmcuConstructionRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
