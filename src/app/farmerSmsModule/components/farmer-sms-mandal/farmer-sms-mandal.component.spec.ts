import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsMandalComponent } from './farmer-sms-mandal.component';

describe('FarmerSmsMandalComponent', () => {
  let component: FarmerSmsMandalComponent;
  let fixture: ComponentFixture<FarmerSmsMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
