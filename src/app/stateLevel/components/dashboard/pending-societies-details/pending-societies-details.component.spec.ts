import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSocietiesDetailsComponent } from './pending-societies-details.component';

describe('PendingSocietiesDetailsComponent', () => {
  let component: PendingSocietiesDetailsComponent;
  let fixture: ComponentFixture<PendingSocietiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSocietiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSocietiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
