import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmfarmerabstractComponent } from './pmfarmerabstract.component';

describe('PmfarmerabstractComponent', () => {
  let component: PmfarmerabstractComponent;
  let fixture: ComponentFixture<PmfarmerabstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmfarmerabstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmfarmerabstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
