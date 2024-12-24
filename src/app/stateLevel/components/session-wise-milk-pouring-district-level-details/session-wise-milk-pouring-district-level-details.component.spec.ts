import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringDistrictLevelDetailsComponent } from './session-wise-milk-pouring-district-level-details.component';

describe('SessionWiseMilkPouringDistrictLevelDetailsComponent', () => {
  let component: SessionWiseMilkPouringDistrictLevelDetailsComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringDistrictLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringDistrictLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringDistrictLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
