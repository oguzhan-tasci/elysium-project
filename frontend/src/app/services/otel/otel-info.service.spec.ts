import { TestBed } from '@angular/core/testing';

import { OtelInfoService } from './otel-info.service';

describe('OtelInfoService', () => {
  let service: OtelInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtelInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
