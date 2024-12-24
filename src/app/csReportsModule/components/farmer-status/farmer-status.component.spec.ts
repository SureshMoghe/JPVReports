import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerStatusComponent } from './farmer-status.component';

describe('FarmerStatusComponent', () => {
  let component: FarmerStatusComponent;
  let fixture: ComponentFixture<FarmerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
