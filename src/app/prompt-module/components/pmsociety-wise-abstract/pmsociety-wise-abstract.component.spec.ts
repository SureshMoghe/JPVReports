import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsocietyWiseAbstractComponent } from './pmsociety-wise-abstract.component';

describe('PmsocietyWiseAbstractComponent', () => {
  let component: PmsocietyWiseAbstractComponent;
  let fixture: ComponentFixture<PmsocietyWiseAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmsocietyWiseAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsocietyWiseAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
