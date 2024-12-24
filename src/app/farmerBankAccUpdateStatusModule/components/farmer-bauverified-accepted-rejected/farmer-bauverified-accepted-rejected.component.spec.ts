import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUVerifiedAcceptedRejectedComponent } from './farmer-bauverified-accepted-rejected.component';

describe('FarmerBAUVerifiedAcceptedRejectedComponent', () => {
  let component: FarmerBAUVerifiedAcceptedRejectedComponent;
  let fixture: ComponentFixture<FarmerBAUVerifiedAcceptedRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUVerifiedAcceptedRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUVerifiedAcceptedRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
