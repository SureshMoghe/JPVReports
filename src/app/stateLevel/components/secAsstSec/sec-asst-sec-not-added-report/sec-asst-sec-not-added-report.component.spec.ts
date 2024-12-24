import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecNotAddedReportComponent } from './sec-asst-sec-not-added-report.component';

describe('SecAsstSecNotAddedReportComponent', () => {
  let component: SecAsstSecNotAddedReportComponent;
  let fixture: ComponentFixture<SecAsstSecNotAddedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecNotAddedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecNotAddedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
