import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeStateComponent } from './farmer-scheme-state.component';

describe('FarmerSchemeStateComponent', () => {
  let component: FarmerSchemeStateComponent;
  let fixture: ComponentFixture<FarmerSchemeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
