import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeMandalComponent } from './farmer-scheme-mandal.component';

describe('FarmerSchemeMandalComponent', () => {
  let component: FarmerSchemeMandalComponent;
  let fixture: ComponentFixture<FarmerSchemeMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
