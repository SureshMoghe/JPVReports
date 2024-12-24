import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvMilkPouringReportComponent } from './vv-milk-pouring-report.component';

describe('VvMilkPouringReportComponent', () => {
  let component: VvMilkPouringReportComponent;
  let fixture: ComponentFixture<VvMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
