import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaRbkbymandalidReportsComponent } from './cheyutha-rbkbymandalid-reports.component';

describe('CheyuthaRbkbymandalidReportsComponent', () => {
  let component: CheyuthaRbkbymandalidReportsComponent;
  let fixture: ComponentFixture<CheyuthaRbkbymandalidReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaRbkbymandalidReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaRbkbymandalidReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
