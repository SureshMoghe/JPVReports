import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPromotersAddedLevelComponent } from './total-promoters-added-level.component';

describe('TotalPromotersAddedLevelComponent', () => {
  let component: TotalPromotersAddedLevelComponent;
  let fixture: ComponentFixture<TotalPromotersAddedLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPromotersAddedLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPromotersAddedLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
