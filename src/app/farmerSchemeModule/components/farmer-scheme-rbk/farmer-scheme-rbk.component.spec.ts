import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeRbkComponent } from './farmer-scheme-rbk.component';

describe('FarmerSchemeRbkComponent', () => {
  let component: FarmerSchemeRbkComponent;
  let fixture: ComponentFixture<FarmerSchemeRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
