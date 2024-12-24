import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNotSubmittedVillagesComponent } from './network-not-submitted-villages.component';

describe('NetworkNotSubmittedVillagesComponent', () => {
  let component: NetworkNotSubmittedVillagesComponent;
  let fixture: ComponentFixture<NetworkNotSubmittedVillagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkNotSubmittedVillagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkNotSubmittedVillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
