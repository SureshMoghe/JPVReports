import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilksecnariodataComponent } from './milksecnariodata.component';

describe('MilksecnariodataComponent', () => {
  let component: MilksecnariodataComponent;
  let fixture: ComponentFixture<MilksecnariodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilksecnariodataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilksecnariodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
