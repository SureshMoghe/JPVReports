import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuportaldataReportComponent } from './amcuportaldata-report.component';

describe('AmcuportaldataReportComponent', () => {
  let component: AmcuportaldataReportComponent;
  let fixture: ComponentFixture<AmcuportaldataReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuportaldataReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuportaldataReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
