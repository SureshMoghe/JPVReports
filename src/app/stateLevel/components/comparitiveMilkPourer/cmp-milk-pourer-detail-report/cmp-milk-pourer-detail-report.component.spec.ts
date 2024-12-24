import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMilkPourerDetailReportComponent } from './cmp-milk-pourer-detail-report.component';

describe('CmpMilkPourerDetailReportComponent', () => {
  let component: CmpMilkPourerDetailReportComponent;
  let fixture: ComponentFixture<CmpMilkPourerDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpMilkPourerDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMilkPourerDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
