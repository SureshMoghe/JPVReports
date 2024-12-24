import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeRouteComponent } from './farmer-scheme-route.component';

describe('FarmerSchemeRouteComponent', () => {
  let component: FarmerSchemeRouteComponent;
  let fixture: ComponentFixture<FarmerSchemeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
