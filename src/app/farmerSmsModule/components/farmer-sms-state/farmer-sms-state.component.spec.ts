import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsStateComponent } from './farmer-sms-state.component';

describe('FarmerSmsStateComponent', () => {
  let component: FarmerSmsStateComponent;
  let fixture: ComponentFixture<FarmerSmsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
