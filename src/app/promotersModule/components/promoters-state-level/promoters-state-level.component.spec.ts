import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersStateLevelComponent } from './promoters-state-level.component';

describe('PromotersStateLevelComponent', () => {
  let component: PromotersStateLevelComponent;
  let fixture: ComponentFixture<PromotersStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
