import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegStateComponent } from './farmer-mpuss-reg-state.component';

describe('FarmerMpussRegStateComponent', () => {
  let component: FarmerMpussRegStateComponent;
  let fixture: ComponentFixture<FarmerMpussRegStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
