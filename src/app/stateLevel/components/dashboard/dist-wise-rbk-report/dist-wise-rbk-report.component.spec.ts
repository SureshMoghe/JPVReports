import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseRbkReportComponent } from './dist-wise-rbk-report.component';

describe('DistWiseRbkReportComponent', () => {
  let component: DistWiseRbkReportComponent;
  let fixture: ComponentFixture<DistWiseRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
