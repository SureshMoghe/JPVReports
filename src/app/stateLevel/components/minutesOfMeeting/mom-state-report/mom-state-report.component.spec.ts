import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomStateReportComponent } from './mom-state-report.component';

describe('MomStateReportComponent', () => {
  let component: MomStateReportComponent;
  let fixture: ComponentFixture<MomStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
