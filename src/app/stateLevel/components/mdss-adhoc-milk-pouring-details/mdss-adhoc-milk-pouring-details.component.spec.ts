import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssAdhocMilkPouringDetailsComponent } from './mdss-adhoc-milk-pouring-details.component';

describe('MdssAdhocMilkPouringDetailsComponent', () => {
  let component: MdssAdhocMilkPouringDetailsComponent;
  let fixture: ComponentFixture<MdssAdhocMilkPouringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssAdhocMilkPouringDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssAdhocMilkPouringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
