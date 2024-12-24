import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafMandalLevelReportComponent } from './vaf-mandal-level-report.component';

describe('VafMandalLevelReportComponent', () => {
  let component: VafMandalLevelReportComponent;
  let fixture: ComponentFixture<VafMandalLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafMandalLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafMandalLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
