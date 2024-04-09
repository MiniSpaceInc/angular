import { TestBed } from '@angular/core/testing';

import { OrganizingUnitMockService } from './organizing-unit-mock.service';

describe('OrganizingUnitMockService', () => {
  let service: OrganizingUnitMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizingUnitMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
