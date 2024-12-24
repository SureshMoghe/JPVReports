import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAOwisefarmersreportDetailsComponent } from './vaowisefarmersreport-details.component';

describe('VAOwisefarmersreportDetailsComponent', () => {
  let component: VAOwisefarmersreportDetailsComponent;
  let fixture: ComponentFixture<VAOwisefarmersreportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAOwisefarmersreportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VAOwisefarmersreportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
