import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
  }


  // axios request to get the repositories of a user
  async getRepositories(url: any): Promise<any> {
    return await axios.get(url); // using axios inorder to access the link response header 
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
