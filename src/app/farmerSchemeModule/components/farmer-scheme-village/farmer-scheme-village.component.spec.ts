import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeVillageComponent } from './farmer-scheme-village.component';

describe('FarmerSchemeVillageComponent', () => {
  let component: FarmerSchemeVillageComponent;
  let fixture: ComponentFixture<FarmerSchemeVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
