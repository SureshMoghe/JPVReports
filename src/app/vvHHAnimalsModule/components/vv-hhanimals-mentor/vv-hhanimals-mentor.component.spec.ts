import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsMentorComponent } from './vv-hhanimals-mentor.component';

describe('VvHHAnimalsMentorComponent', () => {
  let component: VvHHAnimalsMentorComponent;
  let fixture: ComponentFixture<VvHHAnimalsMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
