import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBAUPendingAtDAComponent } from './farmer-baupending-at-da.component';

describe('FarmerBAUPendingAtDAComponent', () => {
  let component: FarmerBAUPendingAtDAComponent;
  let fixture: ComponentFixture<FarmerBAUPendingAtDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBAUPendingAtDAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBAUPendingAtDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
