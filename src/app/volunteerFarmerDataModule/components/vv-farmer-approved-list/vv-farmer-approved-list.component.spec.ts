import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerApprovedListComponent } from './vv-farmer-approved-list.component';

describe('VvFarmerApprovedListComponent', () => {
  let component: VvFarmerApprovedListComponent;
  let fixture: ComponentFixture<VvFarmerApprovedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerApprovedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerApprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
