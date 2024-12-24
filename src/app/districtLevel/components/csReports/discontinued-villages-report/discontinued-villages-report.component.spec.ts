import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuedVillagesReportComponent } from './discontinued-villages-report.component';

describe('DiscontinuedVillagesReportComponent', () => {
  let component: DiscontinuedVillagesReportComponent;
  let fixture: ComponentFixture<DiscontinuedVillagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscontinuedVillagesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscontinuedVillagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
