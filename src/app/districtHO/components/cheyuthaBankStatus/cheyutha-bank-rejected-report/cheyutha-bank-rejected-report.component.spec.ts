import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankRejectedReportComponent } from './cheyutha-bank-rejected-report.component';

describe('CheyuthaBankRejectedReportComponent', () => {
  let component: CheyuthaBankRejectedReportComponent;
  let fixture: ComponentFixture<CheyuthaBankRejectedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankRejectedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankRejectedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
