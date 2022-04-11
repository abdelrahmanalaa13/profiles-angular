import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesBackendService {

  constructor(private httpClient: HttpClient) { }
  getProfilesList() {
    return this.httpClient.get<Profile[]>('https://profiles-list.firebaseio.com/Data.json');
  }
}
