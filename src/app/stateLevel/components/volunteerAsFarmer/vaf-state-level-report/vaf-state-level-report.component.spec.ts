import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafStateLevelReportComponent } from './vaf-state-level-report.component';

describe('VafStateLevelReportComponent', () => {
  let component: VafStateLevelReportComponent;
  let fixture: ComponentFixture<VafStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
