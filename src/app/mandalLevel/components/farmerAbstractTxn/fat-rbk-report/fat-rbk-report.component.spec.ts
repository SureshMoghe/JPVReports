import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatRbkReportComponent } from './fat-rbk-report.component';

describe('FatRbkReportComponent', () => {
  let component: FatRbkReportComponent;
  let fixture: ComponentFixture<FatRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
