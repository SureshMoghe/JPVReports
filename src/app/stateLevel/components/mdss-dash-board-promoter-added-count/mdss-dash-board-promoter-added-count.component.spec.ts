import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssDashBoardPromoterAddedCountComponent } from './mdss-dash-board-promoter-added-count.component';

describe('MdssDashBoardPromoterAddedCountComponent', () => {
  let component: MdssDashBoardPromoterAddedCountComponent;
  let fixture: ComponentFixture<MdssDashBoardPromoterAddedCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssDashBoardPromoterAddedCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssDashBoardPromoterAddedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
