import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafDetailLevelReportComponent } from './vaf-detail-level-report.component';

describe('VafDetailLevelReportComponent', () => {
  let component: VafDetailLevelReportComponent;
  let fixture: ComponentFixture<VafDetailLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafDetailLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafDetailLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
