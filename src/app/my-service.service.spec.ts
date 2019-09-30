import { TestBed } from '@angular/core/testing';

import { myService } from './my-service.service';

describe('myService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: myService = TestBed.get(myService);
    expect(service).toBeTruthy();
  });
});
