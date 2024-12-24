import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsDetailComponent } from './farmer-sms-detail.component';

describe('FarmerSmsDetailComponent', () => {
  let component: FarmerSmsDetailComponent;
  let fixture: ComponentFixture<FarmerSmsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
