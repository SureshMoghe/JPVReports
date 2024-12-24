import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersAddedRbklevelComponent } from './promoters-added-rbklevel.component';

describe('PromotersAddedRbklevelComponent', () => {
  let component: PromotersAddedRbklevelComponent;
  let fixture: ComponentFixture<PromotersAddedRbklevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersAddedRbklevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersAddedRbklevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
