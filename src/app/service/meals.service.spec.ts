import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MealsService } from './meals.service';

describe('MealsService', () => {
  let service: MealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
            providers: [MealsService],
    });
    service = TestBed.inject(MealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
