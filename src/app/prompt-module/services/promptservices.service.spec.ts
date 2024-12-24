import { TestBed } from '@angular/core/testing';

import { PromptservicesService } from './promptservices.service';

describe('PromptservicesService', () => {
  let service: PromptservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
