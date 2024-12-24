import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssRegRptComponent } from './mdss-reg-rpt.component';

describe('MdssRegRptComponent', () => {
  let component: MdssRegRptComponent;
  let fixture: ComponentFixture<MdssRegRptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssRegRptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssRegRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
