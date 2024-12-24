import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsMandalReportComponent } from './vv-hhanimals-mandal-report.component';

describe('VvHHAnimalsMandalReportComponent', () => {
  let component: VvHHAnimalsMandalReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
