import { TestBed } from '@angular/core/testing';

import { OrganizingUnitRestService } from './organizing-unit-rest.service';

describe('OrganizingUnitRestService', () => {
  let service: OrganizingUnitRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizingUnitRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
