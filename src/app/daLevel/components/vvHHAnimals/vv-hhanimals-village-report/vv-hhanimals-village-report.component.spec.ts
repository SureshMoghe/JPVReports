import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsVillageReportComponent } from './vv-hhanimals-village-report.component';

describe('VvHHAnimalsVillageReportComponent', () => {
  let component: VvHHAnimalsVillageReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
