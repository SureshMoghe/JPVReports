import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersAddedRBKComponent } from './promoters-added-rbk.component';

describe('PromotersAddedRBKComponent', () => {
  let component: PromotersAddedRBKComponent;
  let fixture: ComponentFixture<PromotersAddedRBKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersAddedRBKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersAddedRBKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
