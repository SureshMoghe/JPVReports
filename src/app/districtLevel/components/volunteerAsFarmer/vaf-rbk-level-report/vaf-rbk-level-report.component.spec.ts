import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafRbkLevelReportComponent } from './vaf-rbk-level-report.component';

describe('VafRbkLevelReportComponent', () => {
  let component: VafRbkLevelReportComponent;
  let fixture: ComponentFixture<VafRbkLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafRbkLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafRbkLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
