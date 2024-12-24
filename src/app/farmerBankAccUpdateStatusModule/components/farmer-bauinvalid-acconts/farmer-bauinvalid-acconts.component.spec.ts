import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUInvalidAccontsComponent } from './farmer-bauinvalid-acconts.component';

describe('FarmerBAUInvalidAccontsComponent', () => {
  let component: FarmerBAUInvalidAccontsComponent;
  let fixture: ComponentFixture<FarmerBAUInvalidAccontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUInvalidAccontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUInvalidAccontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
