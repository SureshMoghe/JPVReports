import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionStateReportComponent } from './bmcu-construction-state-report.component';

describe('BmcuConstructionStateReportComponent', () => {
  let component: BmcuConstructionStateReportComponent;
  let fixture: ComponentFixture<BmcuConstructionStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
