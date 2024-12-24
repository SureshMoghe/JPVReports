import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagewiseReportComponent } from './villagewise-report.component';

describe('VillagewiseReportComponent', () => {
  let component: VillagewiseReportComponent;
  let fixture: ComponentFixture<VillagewiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagewiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagewiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
