import { TestBed } from '@angular/core/testing';

import { GuideTourService } from './guide-tour.service';

describe('GuideTourService', () => {
  let service: GuideTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
