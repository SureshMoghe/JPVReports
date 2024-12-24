import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersNotAddedRbklevelComponent } from './promoters-not-added-rbklevel.component';

describe('PromotersNotAddedRbklevelComponent', () => {
  let component: PromotersNotAddedRbklevelComponent;
  let fixture: ComponentFixture<PromotersNotAddedRbklevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersNotAddedRbklevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersNotAddedRbklevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
