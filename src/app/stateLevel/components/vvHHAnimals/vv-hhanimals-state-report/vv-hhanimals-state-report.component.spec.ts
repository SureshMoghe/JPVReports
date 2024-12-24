import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsStateReportComponent } from './vv-hhanimals-state-report.component';

describe('VvHHAnimalsStateReportComponent', () => {
  let component: VvHHAnimalsStateReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
