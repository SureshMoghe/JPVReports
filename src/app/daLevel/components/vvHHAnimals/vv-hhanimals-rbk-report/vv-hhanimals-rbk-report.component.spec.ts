import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsRbkReportComponent } from './vv-hhanimals-rbk-report.component';

describe('VvHHAnimalsRbkReportComponent', () => {
  let component: VvHHAnimalsRbkReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
