import { TestBed, inject } from '@angular/core/testing';

import { DatamessageService } from './datamessage.service';

describe('DatamessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatamessageService]
    });
  });

  it('should be created', inject([DatamessageService], (service: DatamessageService) => {
    expect(service).toBeTruthy();
  }));
});
