import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNotInspectedSocitiesComponent } from './amcu-not-inspected-socities.component';

describe('AmcuNotInspectedSocitiesComponent', () => {
  let component: AmcuNotInspectedSocitiesComponent;
  let fixture: ComponentFixture<AmcuNotInspectedSocitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNotInspectedSocitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNotInspectedSocitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
