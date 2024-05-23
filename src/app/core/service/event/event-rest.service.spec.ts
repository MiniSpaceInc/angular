import { TestBed } from '@angular/core/testing';

import {EVENT_SERVICE} from "../../tokens";
import {EventService} from "./event.service";

describe('EventRestService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EVENT_SERVICE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
