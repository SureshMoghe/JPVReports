import { TestBed } from '@angular/core/testing';

import { VolunteerAsFarmerService } from './volunteer-as-farmer.service';

describe('VolunteerAsFarmerService', () => {
  let service: VolunteerAsFarmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerAsFarmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
