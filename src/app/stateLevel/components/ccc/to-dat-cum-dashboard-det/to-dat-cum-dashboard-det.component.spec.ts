import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDatCumDashboardDetComponent } from './to-dat-cum-dashboard-det.component';

describe('ToDatCumDashboardDetComponent', () => {
  let component: ToDatCumDashboardDetComponent;
  let fixture: ComponentFixture<ToDatCumDashboardDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDatCumDashboardDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDatCumDashboardDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
