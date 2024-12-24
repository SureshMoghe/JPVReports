import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerVolunteersLoggedInListComponent } from './vv-farmer-volunteers-logged-in-list.component';

describe('VvFarmerVolunteersLoggedInListComponent', () => {
  let component: VvFarmerVolunteersLoggedInListComponent;
  let fixture: ComponentFixture<VvFarmerVolunteersLoggedInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerVolunteersLoggedInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerVolunteersLoggedInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
