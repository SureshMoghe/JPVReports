import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerregistrationstatusComponent } from './farmerregistrationstatus.component';

describe('FarmerregistrationstatusComponent', () => {
  let component: FarmerregistrationstatusComponent;
  let fixture: ComponentFixture<FarmerregistrationstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerregistrationstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerregistrationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
