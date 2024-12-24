import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAOwisefarmersreportComponent } from './vaowisefarmersreport.component';

describe('VAOwisefarmersreportComponent', () => {
  let component: VAOwisefarmersreportComponent;
  let fixture: ComponentFixture<VAOwisefarmersreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAOwisefarmersreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VAOwisefarmersreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
