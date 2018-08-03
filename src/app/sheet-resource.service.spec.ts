/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SheetResourceService } from './sheet-resource.service';

describe('Service: SheetResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetResourceService]
    });
  });

  it('should ...', inject([SheetResourceService], (service: SheetResourceService) => {
    expect(service).toBeTruthy();
  }));
});
