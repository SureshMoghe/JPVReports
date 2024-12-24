import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingApprovedRejectedComponent } from './grounding-approved-rejected.component';

describe('GroundingApprovedRejectedComponent', () => {
  let component: GroundingApprovedRejectedComponent;
  let fixture: ComponentFixture<GroundingApprovedRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingApprovedRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingApprovedRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
