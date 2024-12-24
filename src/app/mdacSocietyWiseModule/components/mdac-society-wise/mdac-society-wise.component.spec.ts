import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacSocietyWiseComponent } from './mdac-society-wise.component';

describe('MdacSocietyWiseComponent', () => {
  let component: MdacSocietyWiseComponent;
  let fixture: ComponentFixture<MdacSocietyWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacSocietyWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacSocietyWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
