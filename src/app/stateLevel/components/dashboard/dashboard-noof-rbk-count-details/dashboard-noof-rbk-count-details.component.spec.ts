import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNoofRbkCountDetailsComponent } from './dashboard-noof-rbk-count-details.component';

describe('DashboardNoofRbkCountDetailsComponent', () => {
  let component: DashboardNoofRbkCountDetailsComponent;
  let fixture: ComponentFixture<DashboardNoofRbkCountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNoofRbkCountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNoofRbkCountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
