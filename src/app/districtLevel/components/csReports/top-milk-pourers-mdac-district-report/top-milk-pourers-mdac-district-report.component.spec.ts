import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMilkPourersMdacDistrictReportComponent } from './top-milk-pourers-mdac-district-report.component';

describe('TopMilkPourersMdacDistrictReportComponent', () => {
  let component: TopMilkPourersMdacDistrictReportComponent;
  let fixture: ComponentFixture<TopMilkPourersMdacDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMilkPourersMdacDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMilkPourersMdacDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
