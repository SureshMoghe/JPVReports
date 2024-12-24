import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionDistrictComponent } from './bmcu-construction-district.component';

describe('BmcuConstructionDistrictComponent', () => {
  let component: BmcuConstructionDistrictComponent;
  let fixture: ComponentFixture<BmcuConstructionDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
