import { TestBed } from '@angular/core/testing';

import { ActivityDetailsService } from './activity-details.service';

describe('ActivityDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityDetailsService = TestBed.get(ActivityDetailsService);
    expect(service).toBeTruthy();
  });
});
