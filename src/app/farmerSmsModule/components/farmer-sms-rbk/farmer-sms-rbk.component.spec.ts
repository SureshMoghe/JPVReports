import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsRbkComponent } from './farmer-sms-rbk.component';

describe('FarmerSmsRbkComponent', () => {
  let component: FarmerSmsRbkComponent;
  let fixture: ComponentFixture<FarmerSmsRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
