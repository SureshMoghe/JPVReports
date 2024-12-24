import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardsForMdssRegistrationComponent } from './dash-boards-for-mdss-registration.component';

describe('DashBoardsForMdssRegistrationComponent', () => {
  let component: DashBoardsForMdssRegistrationComponent;
  let fixture: ComponentFixture<DashBoardsForMdssRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardsForMdssRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardsForMdssRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
