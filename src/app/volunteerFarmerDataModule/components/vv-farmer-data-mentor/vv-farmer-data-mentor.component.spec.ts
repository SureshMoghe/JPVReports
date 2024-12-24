import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataMentorComponent } from './vv-farmer-data-mentor.component';

describe('VvFarmerDataMentorComponent', () => {
  let component: VvFarmerDataMentorComponent;
  let fixture: ComponentFixture<VvFarmerDataMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
