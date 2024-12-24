import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersNotAddedRBKComponent } from './promoters-not-added-rbk.component';

describe('PromotersNotAddedRBKComponent', () => {
  let component: PromotersNotAddedRBKComponent;
  let fixture: ComponentFixture<PromotersNotAddedRBKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersNotAddedRBKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersNotAddedRBKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
