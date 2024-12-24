import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerwiseDetailsComponent } from './farmerwise-details.component';

describe('FarmerwiseDetailsComponent', () => {
  let component: FarmerwiseDetailsComponent;
  let fixture: ComponentFixture<FarmerwiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerwiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
