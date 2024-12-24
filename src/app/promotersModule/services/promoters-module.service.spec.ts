import { TestBed } from '@angular/core/testing';

import { PromotersModuleService } from './promoters-module.service';

describe('PromotersModuleService', () => {
  let service: PromotersModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotersModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
