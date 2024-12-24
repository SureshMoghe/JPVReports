import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVillageInformationComponent } from './pending-village-information.component';

describe('PendingVillageInformationComponent', () => {
  let component: PendingVillageInformationComponent;
  let fixture: ComponentFixture<PendingVillageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingVillageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVillageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
