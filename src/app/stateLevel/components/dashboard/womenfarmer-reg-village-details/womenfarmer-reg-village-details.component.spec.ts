import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfarmerRegVillageDetailsComponent } from './womenfarmer-reg-village-details.component';

describe('WomenfarmerRegVillageDetailsComponent', () => {
  let component: WomenfarmerRegVillageDetailsComponent;
  let fixture: ComponentFixture<WomenfarmerRegVillageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenfarmerRegVillageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenfarmerRegVillageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
