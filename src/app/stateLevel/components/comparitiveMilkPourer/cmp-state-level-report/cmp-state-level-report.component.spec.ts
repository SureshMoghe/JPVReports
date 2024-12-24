import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpStateLevelReportComponent } from './cmp-state-level-report.component';

describe('CmpStateLevelReportComponent', () => {
  let component: CmpStateLevelReportComponent;
  let fixture: ComponentFixture<CmpStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
