import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersNotAddedRBKLevelComponent } from './promoters-not-added-rbklevel.component';

describe('PromotersNotAddedRBKLevelComponent', () => {
  let component: PromotersNotAddedRBKLevelComponent;
  let fixture: ComponentFixture<PromotersNotAddedRBKLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersNotAddedRBKLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersNotAddedRBKLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
