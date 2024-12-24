import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectedSocitiesComponent } from './amcu-inspected-socities.component';

describe('AmcuInspectedSocitiesComponent', () => {
  let component: AmcuInspectedSocitiesComponent;
  let fixture: ComponentFixture<AmcuInspectedSocitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectedSocitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectedSocitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
