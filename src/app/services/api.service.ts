import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // fetch userinfo 
  getUser(githubUsername: string) {
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
  }

  // get the repositories of a user
  async getRepositories(url: any): Promise<any> {
    return await axios.get(url); // axios was helpful to get the link header from the response
  }
}
