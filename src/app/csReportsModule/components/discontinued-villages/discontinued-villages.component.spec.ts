import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuedVillagesComponent } from './discontinued-villages.component';

describe('DiscontinuedVillagesComponent', () => {
  let component: DiscontinuedVillagesComponent;
  let fixture: ComponentFixture<DiscontinuedVillagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscontinuedVillagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscontinuedVillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
