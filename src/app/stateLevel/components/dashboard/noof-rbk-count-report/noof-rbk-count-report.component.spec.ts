import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoofRbkCountReportComponent } from './noof-rbk-count-report.component';

describe('NoofRbkCountReportComponent', () => {
  let component: NoofRbkCountReportComponent;
  let fixture: ComponentFixture<NoofRbkCountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoofRbkCountReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoofRbkCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
