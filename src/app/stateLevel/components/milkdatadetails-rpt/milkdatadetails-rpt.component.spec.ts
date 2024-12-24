import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkdatadetailsRptComponent } from './milkdatadetails-rpt.component';

describe('MilkdatadetailsRptComponent', () => {
  let component: MilkdatadetailsRptComponent;
  let fixture: ComponentFixture<MilkdatadetailsRptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkdatadetailsRptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkdatadetailsRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
