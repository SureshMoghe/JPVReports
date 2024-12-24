import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaDistrictReportsComponent } from './cheyutha-district-reports.component';

describe('CheyuthaDistrictReportsComponent', () => {
  let component: CheyuthaDistrictReportsComponent;
  let fixture: ComponentFixture<CheyuthaDistrictReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaDistrictReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaDistrictReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
