import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringDistrictLevelReportComponent } from './session-wise-milk-pouring-district-level-report.component';

describe('SessionWiseMilkPouringDistrictLevelReportComponent', () => {
  let component: SessionWiseMilkPouringDistrictLevelReportComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringDistrictLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringDistrictLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringDistrictLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
