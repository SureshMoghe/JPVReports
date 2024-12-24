import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVillageDetailsComponent } from './pending-village-details.component';

describe('PendingVillageDetailsComponent', () => {
  let component: PendingVillageDetailsComponent;
  let fixture: ComponentFixture<PendingVillageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingVillageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVillageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
