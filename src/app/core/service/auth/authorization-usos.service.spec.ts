import { TestBed } from '@angular/core/testing';

import { AuthorizationUsosService } from './authorization-usos.service';

describe('AuthorizationServiceService', () => {
  let service: AuthorizationUsosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationUsosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
