import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerWiseMilkPouringComponent } from './volunteer-wise-milk-pouring.component';

describe('VolunteerWiseMilkPouringComponent', () => {
  let component: VolunteerWiseMilkPouringComponent;
  let fixture: ComponentFixture<VolunteerWiseMilkPouringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerWiseMilkPouringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerWiseMilkPouringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
