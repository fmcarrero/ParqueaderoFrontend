import { TestBed, inject } from '@angular/core/testing';

import { ParqueaderoService } from './parqueadero.service';
import { HttpClient,HttpHandler } from '@angular/common/http';

describe('ParqueaderoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParqueaderoService,HttpClient,HttpHandler]
    });
  });

  it('should be created', inject([ParqueaderoService], (service: ParqueaderoService) => {
    expect(service).toBeTruthy();
  }));
});
