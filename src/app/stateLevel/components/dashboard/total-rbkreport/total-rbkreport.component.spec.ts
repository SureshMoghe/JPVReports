import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRBKReportComponent } from './total-rbkreport.component';

describe('TotalRBKReportComponent', () => {
  let component: TotalRBKReportComponent;
  let fixture: ComponentFixture<TotalRBKReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRBKReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRBKReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
