import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersDetailLevelComponent } from './promoters-detail-level.component';

describe('PromotersDetailLevelComponent', () => {
  let component: PromotersDetailLevelComponent;
  let fixture: ComponentFixture<PromotersDetailLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersDetailLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersDetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
