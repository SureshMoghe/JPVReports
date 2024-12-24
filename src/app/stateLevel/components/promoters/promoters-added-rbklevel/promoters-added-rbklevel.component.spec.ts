import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersAddedRBKLevelComponent } from './promoters-added-rbklevel.component';

describe('PromotersAddedRBKLevelComponent', () => {
  let component: PromotersAddedRBKLevelComponent;
  let fixture: ComponentFixture<PromotersAddedRBKLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersAddedRBKLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersAddedRBKLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
