import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPromotersAddedlevelComponent } from './total-promoters-addedlevel.component';

describe('TotalPromotersAddedlevelComponent', () => {
  let component: TotalPromotersAddedlevelComponent;
  let fixture: ComponentFixture<TotalPromotersAddedlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPromotersAddedlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPromotersAddedlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
