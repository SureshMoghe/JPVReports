import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaDistrictsReportsComponent } from './cheyutha-districts-reports.component';

describe('CheyuthaDistrictsReportsComponent', () => {
  let component: CheyuthaDistrictsReportsComponent;
  let fixture: ComponentFixture<CheyuthaDistrictsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaDistrictsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaDistrictsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
