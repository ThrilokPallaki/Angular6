import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';

describe('ProcessHttpMsgServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpMsgServiceService]
    });
  });

  it('should be created', inject([ProcessHttpMsgServiceService], (service: ProcessHttpMsgServiceService) => {
    expect(service).toBeTruthy();
  }));
});
