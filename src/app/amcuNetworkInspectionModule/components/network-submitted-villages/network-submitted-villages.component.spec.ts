import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSubmittedVillagesComponent } from './network-submitted-villages.component';

describe('NetworkSubmittedVillagesComponent', () => {
  let component: NetworkSubmittedVillagesComponent;
  let fixture: ComponentFixture<NetworkSubmittedVillagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSubmittedVillagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSubmittedVillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
