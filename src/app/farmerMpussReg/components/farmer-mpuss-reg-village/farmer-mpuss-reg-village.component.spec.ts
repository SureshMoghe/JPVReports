import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegVillageComponent } from './farmer-mpuss-reg-village.component';

describe('FarmerMpussRegVillageComponent', () => {
  let component: FarmerMpussRegVillageComponent;
  let fixture: ComponentFixture<FarmerMpussRegVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
