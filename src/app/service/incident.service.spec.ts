import { TestBed } from '@angular/core/testing';

import { IncidentService } from './incident.service';

describe('IncidentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidentService = TestBed.get(IncidentService);
    expect(service).toBeTruthy();
  });
});
