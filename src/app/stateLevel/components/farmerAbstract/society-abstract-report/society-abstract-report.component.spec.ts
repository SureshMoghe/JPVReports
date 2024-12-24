import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyAbstractReportComponent } from './society-abstract-report.component';

describe('SocietyAbstractReportComponent', () => {
  let component: SocietyAbstractReportComponent;
  let fixture: ComponentFixture<SocietyAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyAbstractReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
