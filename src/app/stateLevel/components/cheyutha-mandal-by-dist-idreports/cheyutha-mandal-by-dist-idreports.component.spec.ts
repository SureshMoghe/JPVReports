import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaMandalByDistIDReportsComponent } from './cheyutha-mandal-by-dist-idreports.component';

describe('CheyuthaMandalByDistIDReportsComponent', () => { 
  let component: CheyuthaMandalByDistIDReportsComponent;
  let fixture: ComponentFixture<CheyuthaMandalByDistIDReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaMandalByDistIDReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaMandalByDistIDReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
