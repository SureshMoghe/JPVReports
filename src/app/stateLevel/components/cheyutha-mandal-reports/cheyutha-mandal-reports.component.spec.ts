import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaMandalReportsComponent } from './cheyutha-mandal-reports.component';

describe('CheyuthaMandalReportsComponent', () => {
  let component: CheyuthaMandalReportsComponent;
  let fixture: ComponentFixture<CheyuthaMandalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaMandalReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaMandalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
