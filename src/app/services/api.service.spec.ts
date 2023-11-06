import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should call the getUser method with the correct URL', () => {
    const username = 'testuser';
    const expectedUrl = `https://api.github.com/users/${username}`;

    apiService.getUser(username).subscribe();
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
  });
});
