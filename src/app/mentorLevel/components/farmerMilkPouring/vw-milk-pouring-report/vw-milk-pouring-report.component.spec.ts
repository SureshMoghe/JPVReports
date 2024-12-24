import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwMilkPouringReportComponent } from './vw-milk-pouring-report.component';

describe('VwMilkPouringReportComponent', () => {
  let component: VwMilkPouringReportComponent;
  let fixture: ComponentFixture<VwMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VwMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VwMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
