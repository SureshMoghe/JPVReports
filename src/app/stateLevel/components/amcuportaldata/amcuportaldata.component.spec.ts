import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuportaldataComponent } from './amcuportaldata.component';

describe('AmcuportaldataComponent', () => {
  let component: AmcuportaldataComponent;
  let fixture: ComponentFixture<AmcuportaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuportaldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuportaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
