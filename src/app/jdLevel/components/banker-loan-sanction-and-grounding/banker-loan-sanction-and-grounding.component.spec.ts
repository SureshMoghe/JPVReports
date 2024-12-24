import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerLoanSanctionAndGroundingComponent } from './banker-loan-sanction-and-grounding.component';

describe('BankerLoanSanctionAndGroundingComponent', () => {
  let component: BankerLoanSanctionAndGroundingComponent;
  let fixture: ComponentFixture<BankerLoanSanctionAndGroundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankerLoanSanctionAndGroundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerLoanSanctionAndGroundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
