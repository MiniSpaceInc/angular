import { TestBed } from '@angular/core/testing';

import { CommentMockService } from './comment-mock.service';

describe('EventRestService', () => {
  let service: CommentMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
