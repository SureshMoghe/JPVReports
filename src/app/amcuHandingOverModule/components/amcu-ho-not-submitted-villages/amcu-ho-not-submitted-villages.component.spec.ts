import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHoNotSubmittedVillagesComponent } from './amcu-ho-not-submitted-villages.component';

describe('AmcuHoNotSubmittedVillagesComponent', () => {
  let component: AmcuHoNotSubmittedVillagesComponent;
  let fixture: ComponentFixture<AmcuHoNotSubmittedVillagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHoNotSubmittedVillagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHoNotSubmittedVillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
