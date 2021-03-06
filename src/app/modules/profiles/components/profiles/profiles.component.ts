import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfilesBackendService } from '../../services/profiles-backend.service';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  profilesList: Profile[] = [];
  sortBy: keyof Profile = 'localid';
  searchValue = '';
  isLoaded = false;
  isEmptySearch = false;
  constructor(
    private profilesBackendService: ProfilesBackendService,
    private profilesService: ProfilesService
  ) {}

  ngOnInit(): void {
    this.checkLoadedProfiles();
    console.log(this.profilesList);
  }

  checkLoadedProfiles() {
    this.profilesService.getAllProfiles().subscribe((profiles) => {
      debugger;
      if (profiles) {
        this.profilesList = profiles;
        this.isLoaded = true;
      } else {
        this.profilesBackendService.getProfilesList().subscribe((profiles) => {
          this.profilesList = profiles;
          this.profilesService.setAllProfiles(profiles);
        });
      }
    });
  }
  applyFilter(key: string) {
    this.profilesList = [
      ...(this.profilesService.filterProfiles(key?.trim()) || []),
    ];
    this.isEmptySearch = this.profilesList.length === 0;
  }

  applySort(key: keyof Profile) {
    this.sortBy = key;
    this.profilesList = [...(this.profilesService.sortProfiles(key) || [])];
  }
}
