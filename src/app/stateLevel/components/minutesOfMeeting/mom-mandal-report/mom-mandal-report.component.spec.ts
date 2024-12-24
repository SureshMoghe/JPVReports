import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomMandalReportComponent } from './mom-mandal-report.component';

describe('MomMandalReportComponent', () => {
  let component: MomMandalReportComponent;
  let fixture: ComponentFixture<MomMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
