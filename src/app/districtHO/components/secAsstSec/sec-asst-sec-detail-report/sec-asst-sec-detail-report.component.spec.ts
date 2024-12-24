import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecDetailReportComponent } from './sec-asst-sec-detail-report.component';

describe('SecAsstSecDetailReportComponent', () => {
  let component: SecAsstSecDetailReportComponent;
  let fixture: ComponentFixture<SecAsstSecDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
