import { TestBed } from '@angular/core/testing';

import { FriendRestService } from './friend-rest.service';

describe('FriendRestService', () => {
  let service: FriendRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
