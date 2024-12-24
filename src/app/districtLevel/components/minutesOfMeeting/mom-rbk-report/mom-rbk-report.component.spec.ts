import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomRbkReportComponent } from './mom-rbk-report.component';

describe('MomRbkReportComponent', () => {
  let component: MomRbkReportComponent;
  let fixture: ComponentFixture<MomRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
