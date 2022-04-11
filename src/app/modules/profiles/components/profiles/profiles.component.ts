import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfilesBackendService } from '../../services/profiles-backend.service';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profilesList: Profile[] = [];
  constructor(private profilesBackendService: ProfilesBackendService, private profilesService: ProfilesService) { }

  ngOnInit(): void {
    this.checkLoadedProfiles();
  }

  checkLoadedProfiles() {
    this.profilesService.getFilteredProfiles().subscribe(profiles => {
      debugger
      if (profiles) {
        this.profilesList = profiles;
      } else {
        this.profilesBackendService.getProfilesList().subscribe(profiles => {
          this.profilesList = profiles;
          this.profilesService.setAllProfiles(profiles);
          this.profilesService.setPageNumber(0);
        });
      }
    });
  }
}
