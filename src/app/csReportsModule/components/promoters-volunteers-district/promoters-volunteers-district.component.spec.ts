import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersVolunteersDistrictComponent } from './promoters-volunteers-district.component';

describe('PromotersVolunteersDistrictComponent', () => {
  let component: PromotersVolunteersDistrictComponent;
  let fixture: ComponentFixture<PromotersVolunteersDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersVolunteersDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersVolunteersDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
