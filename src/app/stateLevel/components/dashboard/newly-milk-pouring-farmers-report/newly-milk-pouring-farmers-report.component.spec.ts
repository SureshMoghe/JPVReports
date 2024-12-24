import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyMilkPouringFarmersReportComponent } from './newly-milk-pouring-farmers-report.component';

describe('NewlyMilkPouringFarmersReportComponent', () => {
  let component: NewlyMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<NewlyMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
