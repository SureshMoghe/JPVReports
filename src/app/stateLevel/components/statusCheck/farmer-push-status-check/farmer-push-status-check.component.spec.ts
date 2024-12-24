import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPushStatusCheckComponent } from './farmer-push-status-check.component';

describe('FarmerPushStatusCheckComponent', () => {
  let component: FarmerPushStatusCheckComponent;
  let fixture: ComponentFixture<FarmerPushStatusCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerPushStatusCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPushStatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
