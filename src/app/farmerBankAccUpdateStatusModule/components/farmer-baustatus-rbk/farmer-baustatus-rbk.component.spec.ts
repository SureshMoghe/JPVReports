import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUStatusRbkComponent } from './farmer-baustatus-rbk.component';

describe('FarmerBAUStatusRbkComponent', () => {
  let component: FarmerBAUStatusRbkComponent;
  let fixture: ComponentFixture<FarmerBAUStatusRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUStatusRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUStatusRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
