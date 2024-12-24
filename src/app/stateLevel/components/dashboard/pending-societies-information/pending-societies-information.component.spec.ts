import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSocietiesInformationComponent } from './pending-societies-information.component';

describe('PendingSocietiesInformationComponent', () => {
  let component: PendingSocietiesInformationComponent;
  let fixture: ComponentFixture<PendingSocietiesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSocietiesInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSocietiesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
