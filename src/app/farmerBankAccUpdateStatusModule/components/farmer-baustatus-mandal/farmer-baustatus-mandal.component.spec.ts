import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUStatusMandalComponent } from './farmer-baustatus-mandal.component';

describe('FarmerBAUStatusMandalComponent', () => {
  let component: FarmerBAUStatusMandalComponent;
  let fixture: ComponentFixture<FarmerBAUStatusMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUStatusMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUStatusMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
