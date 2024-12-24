import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionAndGroundingComponent } from './loan-sanction-and-grounding.component';

describe('LoanSanctionAndGroundingComponent', () => {
  let component: LoanSanctionAndGroundingComponent;
  let fixture: ComponentFixture<LoanSanctionAndGroundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSanctionAndGroundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSanctionAndGroundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
