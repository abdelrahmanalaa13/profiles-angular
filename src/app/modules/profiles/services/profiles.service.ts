import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  allProfilesSubject: BehaviorSubject<Profile[] | null> = new BehaviorSubject<Profile[] | null>(null)
  filteredProfilesSubject = new BehaviorSubject<Profile[] | null>(null)
  numPerPage = 10;
  pageNumber = 1;
  constructor() { }

  // checkIfProfileExists(profile: Profile) {
  //   if (this.allProfilesSubject && this.allProfilesSubject.value) {
  //     return this.allProfilesSubject.value.find(p => p.localid === profile.localid)
  //   }
  // }

  setPageNumber(pageNumber: number) {
    if (this.allProfilesSubject && this.allProfilesSubject.value) {
      this.pageNumber = pageNumber;
      this.filteredProfilesSubject.next(this.allProfilesSubject.value.slice(pageNumber * this.numPerPage, (pageNumber + 1) * this.numPerPage))
    }
  }
  setAllProfiles(profiles: Profile[]) {
    this.allProfilesSubject.next(profiles)
  }

  setFilteredProfiles(profiles: Profile[]) {
    this.filteredProfilesSubject.next(profiles)
  }

  getAllProfiles() {
    return this.allProfilesSubject.asObservable();
  }

  getFilteredProfiles() {
    return this.filteredProfilesSubject.asObservable();
  }
}
