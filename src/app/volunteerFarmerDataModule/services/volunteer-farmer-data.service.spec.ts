import { TestBed } from '@angular/core/testing';

import { VolunteerFarmerDataService } from './volunteer-farmer-data.service';

describe('VolunteerFarmerDataService', () => {
  let service: VolunteerFarmerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerFarmerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
