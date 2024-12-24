import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFeedIndentDashboardComponent } from './farmer-feed-indent-dashboard.component';

describe('FarmerFeedIndentDashboardComponent', () => {
  let component: FarmerFeedIndentDashboardComponent;
  let fixture: ComponentFixture<FarmerFeedIndentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerFeedIndentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerFeedIndentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
