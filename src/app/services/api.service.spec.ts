import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import axios from 'axios';
import * as MockAdapter from 'axios-mock-adapter';
import { Repo } from '../models/repo.model';
import { User } from '../models/user.model';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;
  let axiosMock: MockAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    axiosMock = new MockAdapter(axios);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });


  it('should fetch user info', () => {
    const username = 'testUser';

    const dummyUser: User = {
      repos_url: 'url1',
      public_repos: 10,
      login: username,
      id: 1,
      avatar_url: 'url2',
      name: 'testUser',
      bio: 'bio',
      location: 'location',
      blog: 'blog',
    };

    apiService.getUser(username).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });
  

  it('should get user repositories', async () => {
    const url = 'https://example.com/repos';
    const dummyRepositories: Repo[] = [
      { id: 1, name: 'repo1', description: 'Description 1', html_url: 'URL 1', forks_count: 3, updated_at: 'Date 1', topics: [] },
      { id: 2, name: 'repo2', description: 'Description 2', html_url: 'URL 2', forks_count: 2, updated_at: 'Date 2', topics: [] },
    ];
    const dummyResponse = { data: dummyRepositories, headers: {} };

    spyOn(axios, 'get').and.returnValue(Promise.resolve(dummyResponse));

    const response = await apiService.getRepositories(url);
    expect(response).toEqual(dummyResponse);
  });

});
