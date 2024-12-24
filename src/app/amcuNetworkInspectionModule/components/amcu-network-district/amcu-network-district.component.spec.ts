import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNetworkDistrictComponent } from './amcu-network-district.component';

describe('AmcuNetworkDistrictComponent', () => {
  let component: AmcuNetworkDistrictComponent;
  let fixture: ComponentFixture<AmcuNetworkDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNetworkDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNetworkDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
