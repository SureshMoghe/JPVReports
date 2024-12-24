import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GswspersonupdatedetailsComponent } from './gswspersonupdatedetails.component';

describe('GswspersonupdatedetailsComponent', () => {
  let component: GswspersonupdatedetailsComponent;
  let fixture: ComponentFixture<GswspersonupdatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GswspersonupdatedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GswspersonupdatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
