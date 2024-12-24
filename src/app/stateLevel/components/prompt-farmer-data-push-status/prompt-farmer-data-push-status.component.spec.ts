import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptFarmerDataPushStatusComponent } from './prompt-farmer-data-push-status.component';

describe('PromptFarmerDataPushStatusComponent', () => {
  let component: PromptFarmerDataPushStatusComponent;
  let fixture: ComponentFixture<PromptFarmerDataPushStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptFarmerDataPushStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptFarmerDataPushStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
