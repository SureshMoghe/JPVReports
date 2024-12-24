import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUStatusStateComponent } from './farmer-baustatus-state.component';

describe('FarmerBAUStatusStateComponent', () => {
  let component: FarmerBAUStatusStateComponent;
  let fixture: ComponentFixture<FarmerBAUStatusStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUStatusStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUStatusStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
