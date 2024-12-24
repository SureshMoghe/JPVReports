import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMastersDetailsComponent } from './all-masters-details.component';

describe('AllMastersDetailsComponent', () => {
  let component: AllMastersDetailsComponent;
  let fixture: ComponentFixture<AllMastersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMastersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMastersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
