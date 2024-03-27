import { TestBed } from '@angular/core/testing';

import { EventMockService } from './event-mock.service';

describe('EventService', () => {
  let service: EventMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
