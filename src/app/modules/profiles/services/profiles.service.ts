import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  allProfilesSubject: BehaviorSubject<Profile[] | null> = new BehaviorSubject<
    Profile[] | null
  >(null);
  filteredProfilesSubject = new BehaviorSubject<Profile[] | null>(null);
  constructor() {}

  setAllProfiles(profiles: Profile[]) {
    this.allProfilesSubject.next(profiles);
  }

  getAllProfiles() {
    return this.allProfilesSubject.asObservable();
  }

  filterProfiles(key: string) {
    return (
      this.allProfilesSubject.value?.filter((profile: Profile) => {
        return (
          profile.first_name.toLowerCase().startsWith(key.toLowerCase()) ||
          profile.last_name.toLowerCase().startsWith(key.toLowerCase()) ||
          profile.email.toLowerCase().startsWith(key.toLowerCase())
        );
      }) || this.allProfilesSubject.value
    );
  }

  sortProfiles(key: keyof Profile) {
    return (
      this.allProfilesSubject.value?.sort((a: Profile, b: Profile) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      }) || this.allProfilesSubject.value
    );
  }

  getProfileById(id: number) {
    return (
      this.allProfilesSubject.value?.find((profile: Profile) => {
        return profile.localid === id;
      }) || null
    );
  }
}
