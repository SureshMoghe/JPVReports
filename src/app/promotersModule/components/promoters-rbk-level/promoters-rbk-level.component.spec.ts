import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersRbkLevelComponent } from './promoters-rbk-level.component';

describe('PromotersRbkLevelComponent', () => {
  let component: PromotersRbkLevelComponent;
  let fixture: ComponentFixture<PromotersRbkLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersRbkLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersRbkLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
