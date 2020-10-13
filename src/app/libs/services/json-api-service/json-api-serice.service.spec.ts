import { TestBed } from '@angular/core/testing';

import { JsonApiSericeService } from './json-api-serice.service';

describe('JsonApiSericeService', () => {
  let service: JsonApiSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonApiSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
