import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaMandalReportComponent } from './cheyutha-mandal-report.component';

describe('CheyuthaMandalReportComponent', () => {
  let component: CheyuthaMandalReportComponent;
  let fixture: ComponentFixture<CheyuthaMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
