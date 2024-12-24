import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMilkStatusDistrictComponent } from './sample-milk-status-district.component';

describe('SampleMilkStatusDistrictComponent', () => {
  let component: SampleMilkStatusDistrictComponent;
  let fixture: ComponentFixture<SampleMilkStatusDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleMilkStatusDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMilkStatusDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
