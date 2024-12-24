import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMilkPourersMdacDistrictComponent } from './top-milk-pourers-mdac-district.component';

describe('TopMilkPourersMdacDistrictComponent', () => {
  let component: TopMilkPourersMdacDistrictComponent;
  let fixture: ComponentFixture<TopMilkPourersMdacDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMilkPourersMdacDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMilkPourersMdacDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
