import { TestBed } from '@angular/core/testing';

import { ReportRestService } from './report-rest.service';

describe('ReportRestService', () => {
  let service: ReportRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
