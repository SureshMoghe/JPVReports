import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegRbkReportComponent } from './womenfarmer-reg-rbk-report.component';

describe('WomenfarmerRegRbkReportComponent', () => {
  let component: WomenfarmerRegRbkReportComponent;
  let fixture: ComponentFixture<WomenfarmerRegRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
