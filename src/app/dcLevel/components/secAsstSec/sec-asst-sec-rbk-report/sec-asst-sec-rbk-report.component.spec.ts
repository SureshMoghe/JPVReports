import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecRbkReportComponent } from './sec-asst-sec-rbk-report.component';

describe('SecAsstSecRbkReportComponent', () => {
  let component: SecAsstSecRbkReportComponent;
  let fixture: ComponentFixture<SecAsstSecRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
