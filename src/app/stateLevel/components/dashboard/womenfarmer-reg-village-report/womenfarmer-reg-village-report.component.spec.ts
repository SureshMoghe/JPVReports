import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegVillageReportComponent } from './womenfarmer-reg-village-report.component';

describe('WomenfarmerRegVillageReportComponent', () => {
  let component: WomenfarmerRegVillageReportComponent;
  let fixture: ComponentFixture<WomenfarmerRegVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
