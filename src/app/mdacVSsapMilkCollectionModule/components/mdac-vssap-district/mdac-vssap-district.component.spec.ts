import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacVSsapDistrictComponent } from './mdac-vssap-district.component';

describe('MdacVSsapDistrictComponent', () => {
  let component: MdacVSsapDistrictComponent;
  let fixture: ComponentFixture<MdacVSsapDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacVSsapDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacVSsapDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
