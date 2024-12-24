import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacNotCreatedStateLevelReportComponent } from './mdac-not-created-state-level-report.component';

describe('MdacNotCreatedStateLevelReportComponent', () => {
  let component: MdacNotCreatedStateLevelReportComponent;
  let fixture: ComponentFixture<MdacNotCreatedStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacNotCreatedStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacNotCreatedStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
