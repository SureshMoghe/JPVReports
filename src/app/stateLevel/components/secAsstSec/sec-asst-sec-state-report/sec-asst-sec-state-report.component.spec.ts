import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecStateReportComponent } from './sec-asst-sec-state-report.component';

describe('SecAsstSecStateReportComponent', () => {
  let component: SecAsstSecStateReportComponent;
  let fixture: ComponentFixture<SecAsstSecStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
