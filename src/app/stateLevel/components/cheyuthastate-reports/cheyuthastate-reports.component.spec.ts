import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthastateReportsComponent } from './cheyuthastate-reports.component';

describe('CheyuthastateReportsComponent', () => {
  let component: CheyuthastateReportsComponent;
  let fixture: ComponentFixture<CheyuthastateReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthastateReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthastateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
