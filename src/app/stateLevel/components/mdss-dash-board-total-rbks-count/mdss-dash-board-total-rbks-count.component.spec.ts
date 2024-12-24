import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssDashBoardTotalRBKsCountComponent } from './mdss-dash-board-total-rbks-count.component';

describe('MdssDashBoardTotalRBKsCountComponent', () => {
  let component: MdssDashBoardTotalRBKsCountComponent;
  let fixture: ComponentFixture<MdssDashBoardTotalRBKsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssDashBoardTotalRBKsCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssDashBoardTotalRBKsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
