import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomDistrictComponent } from './mom-district.component';

describe('MomDistrictComponent', () => {
  let component: MomDistrictComponent;
  let fixture: ComponentFixture<MomDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
