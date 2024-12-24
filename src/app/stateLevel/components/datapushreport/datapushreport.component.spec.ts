import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapushreportComponent } from './datapushreport.component';

describe('DatapushreportComponent', () => {
  let component: DatapushreportComponent;
  let fixture: ComponentFixture<DatapushreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapushreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapushreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
