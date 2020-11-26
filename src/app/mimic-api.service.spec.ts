import { TestBed } from '@angular/core/testing';

import { MimicApiService } from './mimic-api.service';

describe('MimicApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MimicApiService = TestBed.get(MimicApiService);
    expect(service).toBeTruthy();
  });
});
