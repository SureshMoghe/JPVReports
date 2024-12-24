import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssFollowupAbstractReportComponent } from './mdss-followup-abstract-report.component';

describe('MdssFollowupAbstractReportComponent', () => {
  let component: MdssFollowupAbstractReportComponent;
  let fixture: ComponentFixture<MdssFollowupAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssFollowupAbstractReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssFollowupAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
