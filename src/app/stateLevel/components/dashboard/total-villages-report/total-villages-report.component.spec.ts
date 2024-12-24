import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVillagesReportComponent } from './total-villages-report.component';

describe('TotalVillagesReportComponent', () => {
  let component: TotalVillagesReportComponent;
  let fixture: ComponentFixture<TotalVillagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVillagesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVillagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
