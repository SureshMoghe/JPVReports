import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssDashBoardEligibleMDSSCountComponent } from './mdss-dash-board-eligible-mdsscount.component';

describe('MdssDashBoardEligibleMDSSCountComponent', () => {
  let component: MdssDashBoardEligibleMDSSCountComponent;
  let fixture: ComponentFixture<MdssDashBoardEligibleMDSSCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssDashBoardEligibleMDSSCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssDashBoardEligibleMDSSCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
