import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerVolunteersListComponent } from './vv-farmer-volunteers-list.component';

describe('VvFarmerVolunteersListComponent', () => {
  let component: VvFarmerVolunteersListComponent;
  let fixture: ComponentFixture<VvFarmerVolunteersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerVolunteersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerVolunteersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
