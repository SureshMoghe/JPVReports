import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldistrictreportdetailsComponent } from './totaldistrictreportdetails.component';

describe('TotaldistrictreportdetailsComponent', () => {
  let component: TotaldistrictreportdetailsComponent;
  let fixture: ComponentFixture<TotaldistrictreportdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldistrictreportdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldistrictreportdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
