import { TestBed } from '@angular/core/testing';

import { VillageMeetingService } from './village-meeting.service';

describe('VillageMeetingService', () => {
  let service: VillageMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
