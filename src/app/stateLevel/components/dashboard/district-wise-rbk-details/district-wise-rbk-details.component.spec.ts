import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseRbkDetailsComponent } from './district-wise-rbk-details.component';

describe('DistrictWiseRbkDetailsComponent', () => {
  let component: DistrictWiseRbkDetailsComponent;
  let fixture: ComponentFixture<DistrictWiseRbkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseRbkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseRbkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
