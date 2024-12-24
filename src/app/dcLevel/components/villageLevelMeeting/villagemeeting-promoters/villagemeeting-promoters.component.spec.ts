import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingPromotersComponent } from './villagemeeting-promoters.component';

describe('VillagemeetingPromotersComponent', () => {
  let component: VillagemeetingPromotersComponent;
  let fixture: ComponentFixture<VillagemeetingPromotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingPromotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingPromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
