import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBankDistrictComponent } from './cheyutha-bank-district.component';

describe('CheyuthaBankDistrictComponent', () => {
  let component: CheyuthaBankDistrictComponent;
  let fixture: ComponentFixture<CheyuthaBankDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBankDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBankDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
