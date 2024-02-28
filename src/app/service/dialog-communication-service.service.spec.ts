import { TestBed } from '@angular/core/testing';

import { DialogCommunicationServiceService } from './dialog-communication-service.service';

describe('DialogCommunicationServiceService', () => {
  let service: DialogCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
