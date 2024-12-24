import { TestBed } from '@angular/core/testing';

import { MinutesOfMeetingService } from './minutes-of-meeting.service';

describe('MinutesOfMeetingService', () => {
  let service: MinutesOfMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinutesOfMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
